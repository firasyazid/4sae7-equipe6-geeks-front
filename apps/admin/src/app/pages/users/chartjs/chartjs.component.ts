import { Component, OnInit } from '@angular/core';
import {User} from "../../../Entities/User";
import {UserService} from "../../../Services/userService/user.service";
@Component({
  selector: 'bluebits-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent implements OnInit {
  constructor(
    public userService:UserService
  ) {

  }
  chartData
  roleCounts = {
    ROLE_USER: 0,
    ROLE_INSTRUCTOR: 0,
    ROLE_ADMIN: 0,
    ROLE_SUPER_USER: 0,
    NULL: 0,
  };
  public async stats()
  {

    await this.userService.getAllUsers().subscribe(x=>{
    x.forEach((user:User) => {
      this.roleCounts[user.roles[0].name] += 1;
    });

      // console.table(this.roleCounts)

      this.chartData = Object.entries(this.roleCounts).map(([label, count]) => ({
        label,
        y: count,
      }));

      console.table(this.chartData);

      this.chartOptions = {
        title: {
          text: "Chart for user Roles"
        },
        data: [{
          type: "bar",
          dataPoints: [
            { label: "ROLE_USER",  y: this.roleCounts.ROLE_SUPER_USER },
            { label: "ROLE_INSTRUCTOR", y: this.roleCounts.ROLE_INSTRUCTOR},
            { label: "ROLE_ADMIN", y:this.roleCounts.ROLE_ADMIN},
            { label: "ROLE_SUPER_USER",  y: this.roleCounts.ROLE_SUPER_USER},
            { label: "NULL",  y:this.roleCounts.NULL}
          ]
        }]

      };

    return this.chartData
    })
  }


  chartOptions


  async ngOnInit() {
     await this.startAll()
  }

  async startAll(): Promise<void>  {
    // await this.stats()




    console.log("~~~~",await this.stats())
  }
}
