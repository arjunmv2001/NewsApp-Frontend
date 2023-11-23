import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allNews:any[],searchTerm:string,propsName:string): any[]{
    const datas:any[]=[]
    if(!allNews||searchTerm==''||propsName==''){
      return allNews;
    }
    allNews.forEach((news:any)=>{
      if(news[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      datas.push(news)
    })
    return datas;
  }

}
