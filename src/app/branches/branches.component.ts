import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent {
  selectedBranch: any = null;

branches = [
  {
    name: 'Nellore',
    address: 'Dargamitta, Nellore, Andhra Pradesh 524003',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Nellore',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+-+CNG+Kit+Fitting+Ayappa+Temple+Center+near+Flyover+Bridge,+S+R+K+Nagar+Nellore,+Andhra+Pradesh+524004',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.921098700398!2d79.93383407375993!3d14.412202281664145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3bf75a8e185%3A0x77a549da6ec78787!2sLavanya%20Enterprises%20-%20CNG%20Kit%20Fitting!5e1!3m2!1sen!2sin!4v1750250748283!5m2!1sen!2sin',
    image: 'assets/img/cng.png',
    addressLines: [
      'Ayappa Temple Center, near Flyover Bridge, Nellore',
      'Andhra Pradesh - 524004'
    ],
    phone: '+91-987654321',
    mapButtonText: 'GET DIRECTIONS',
  },
  {
    name: 'Tirupati',
    address: 'Renigunta Road, Tirupati, Andhra Pradesh 517501',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Tirupati',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Tirupati',
    iframeSrc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81364.88237315313!2d79.36091375092421!3d13.666926183947583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b226265b779%3A0x3a4a8004d7789b56!2sLavanya%20Enterprises%20CNG%20dealer!5e1!3m2!1sen!2sin!4v1750420586114!5m2!1sen!2sin',
    image: 'assets/img/tirupati.jpg'
  },
  {
    name: 'Vizag',
    address: 'Gajuwaka, Visakhapatnam, Andhra Pradesh 530026',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Vizag',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Vizag',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.325163282931!2d83.19260527426852!3d17.686815692885874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943365cbdd1c3%3A0xb0c3f0b0147f90e1!2sGajuwaka%2C+Visakhapatnam%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1750251500000!5m2!1sen!2sin',
    image: 'assets/img/vizag.jpg'
  },
  {
    name: 'Vizianagaram',
    address: 'Near RTC Complex, Vizianagaram, Andhra Pradesh 535001',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Vizianagaram',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Vizianagaram',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.202000618633!2d83.40000007426307!3d18.111951888192457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcfcf08e4eae3%3A0x8f624f8a7d15b3fa!2sVizianagaram!5e0!3m2!1sen!2sin!4v1750251600000!5m2!1sen!2sin',
    image: 'assets/img/vizianagaram.jpg'
  }
];



  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const city = params['city'];
      if (city) {
        const branch = this.branches.find(b => b.name.toLowerCase() === city.toLowerCase());
        if (branch) {
          this.selectedBranch = branch;
        }
      }
    });
  }

  selectBranch(branch: any): void {
    this.selectedBranch = branch;
  }
}
