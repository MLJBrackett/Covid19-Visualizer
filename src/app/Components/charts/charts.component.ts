import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GetDataService } from '../../Services/get-data.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  typedValue = 'canada';

  config: SwiperOptions = {
    effect: 'coverflow',
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  barChart: any;
  allPulledData: any;

  constructor(private getService: GetDataService) { }

  ngOnInit() {
    this.getService.getDetailedData().subscribe((moreData) => {
      console.log(moreData);

      this.allPulledData = moreData;

      this.pullAllData(this.allPulledData)
    });


  };

  pullAllData(data) {


    // Chart #1
    this.barChart = new Chart('barChartz',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[0].provinceState}`,
            data: [
              `${data[0].confirmed}`,
              `${data[0].recovered}`,
              `${data[0].deaths}`,
              `${data[0].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });

    // Chart #2
    this.barChart = new Chart('barChartz2',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[1].provinceState}`,
            data: [
              `${data[1].confirmed}`,
              `${data[1].recovered}`,
              `${data[1].deaths}`,
              `${data[1].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });



    // Chart #3
    this.barChart = new Chart('barChartz3',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[2].provinceState}`,
            data: [
              `${data[2].confirmed}`,
              `${data[2].recovered}`,
              `${data[2].deaths}`,
              `${data[2].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });



    // Chart #4
    this.barChart = new Chart('barChartz4',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[3].provinceState}`,
            data: [
              `${data[3].confirmed}`,
              `${data[3].recovered}`,
              `${data[3].deaths}`,
              `${data[3].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });



    // Chart #5
    this.barChart = new Chart('barChartz5',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[4].provinceState}`,
            data: [
              `${data[4].confirmed}`,
              `${data[4].recovered}`,
              `${data[4].deaths}`,
              `${data[4].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });



    // Chart #6
    this.barChart = new Chart('barChartz6',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[5].provinceState}`,
            data: [
              `${data[5].confirmed}`,
              `${data[5].recovered}`,
              `${data[5].deaths}`,
              `${data[5].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });


    // Chart #7
    this.barChart = new Chart('barChartz7',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[6].provinceState}`,
            data: [
              `${data[6].confirmed}`,
              `${data[6].recovered}`,
              `${data[6].deaths}`,
              `${data[6].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });


    // Chart #8
    this.barChart = new Chart('barChartz8',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[7].provinceState}`,
            data: [
              `${data[7].confirmed}`,
              `${data[7].recovered}`,
              `${data[7].deaths}`,
              `${data[7].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });



    // Chart #9
    this.barChart = new Chart('barChartz9',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[8].provinceState}`,
            data: [
              `${data[8].confirmed}`,
              `${data[8].recovered}`,
              `${data[8].deaths}`,
              `${data[8].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });


    // Chart #10
    this.barChart = new Chart('barChartz10',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[9].provinceState}`,
            data: [
              `${data[9].confirmed}`,
              `${data[9].recovered}`,
              `${data[9].deaths}`,
              `${data[9].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });


    // Chart #11
    this.barChart = new Chart('barChartz11',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[10].provinceState}`,
            data: [
              `${data[10].confirmed}`,
              `${data[10].recovered}`,
              `${data[10].deaths}`,
              `${data[10].active}`
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });

  }


}
