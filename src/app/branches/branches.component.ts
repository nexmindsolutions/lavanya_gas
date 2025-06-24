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
  // card1
  {
    branch:'Nellore',
    description:'`Welcome to the Nellore branch of Lavanya Enterprises, a trusted name in CNG retrofitment solutions. We are committed to transforming your petrol vehicles into eco-friendly, fuel-efficient CNG-powered machines — reducing emissions, saving fuel costs, and contributing to a cleaner environment.',
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


   // card2
  {
    branch:'Triupati',
    description:'`Welcome to the Tirupati branch of Lavanya Enterprises, a trusted name in CNG retrofitment solutions. We are committed to transforming your petrol vehicles into eco-friendly, fuel-efficient CNG-powered machines — reducing emissions, saving fuel costs, and contributing to a cleaner environment. High-Quality CNG Cylinders & Spare Parts. Periodic CNG Maintenance & Safety Inspections`,',
    name: 'Tirupati',
    address: 'Renigunta Road, Tirupati, Andhra Pradesh 517501',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Tirupati',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Tirupati',
    iframeSrc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81364.88237315313!2d79.36091375092421!3d13.666926183947583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b226265b779%3A0x3a4a8004d7789b56!2sLavanya%20Enterprises%20CNG%20dealer!5e1!3m2!1sen!2sin!4v1750420586114!5m2!1sen!2sin',
    image: 'assets/img/Cars-CNG.png'
  },

   // card3
  {
    branch:'Vizag',
    description:'`Welcome to the Vizag branch of Lavanya Enterprises, a leading provider of CNG retrofitment solutions on the east coast. Our facility is dedicated to transforming conventional petrol vehicles into eco-friendly, CNG-powered machines that offer better mileage and lower emissions. With a focus on quality, safety, and customer satisfaction, we provide certified CNG kits, expert installations, and periodic maintenance services to ensure smooth and efficient vehicle performance. High-Quality CNG Cylinders & Spare Parts. Periodic CNG Maintenance & Safety Inspections.',
    name: 'Vizag',
    address: 'Gajuwaka, Visakhapatnam, Andhra Pradesh 530026',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Vizag',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Vizag',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.325163282931!2d83.19260527426852!3d17.686815692885874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943365cbdd1c3%3A0xb0c3f0b0147f90e1!2sGajuwaka%2C+Visakhapatnam%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1750251500000!5m2!1sen!2sin',
    image: 'assets/img/CNG-vehicle.jpg'
  },
   // card4
  {
    branch:'Vizianagaram',
    description:'`Welcome to the Vizianagaram branch of Lavanya Enterprises, Situated in the historic city of Vizianagaram, our branch caters to vehicle owners seeking dependable CNG conversion services with a focus on safety and affordability. At Lavanya Enterprises Vizianagaram, we take pride in offering solutions tailored to local driving conditions. Our team of trained professionals ensures that every installation meets the highest standards, while our customer-first approach ensures timely support and maintenance. Join the clean fuel movement with our trusted services in North Andhra.',
    name: 'Vizianagaram',
    address: 'Near RTC Complex, Vizianagaram, Andhra Pradesh 535001',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Vizianagaram',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Vizianagaram',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.202000618633!2d83.40000007426307!3d18.111951888192457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcfcf08e4eae3%3A0x8f624f8a7d15b3fa!2sVizianagaram!5e0!3m2!1sen!2sin!4v1750251600000!5m2!1sen!2sin',
    image: 'assets/img/download.jpeg'
  },
 // card5
  {
    branch:'Hyderabad',
    description:'Welcome to the Hyderabad branch of Lavanya Enterprises, your go-to destination for reliable and efficient CNG retrofitment solutions. Located in the heart of the city, our team specializes in converting petrol vehicles into clean, cost-effective CNG-powered alternatives. We are committed to delivering high-performance installations, strict safety standards, and eco-conscious service to meet the growing need for sustainable transportation. High-Quality CNG Cylinders & Spare Parts. Periodic CNG Maintenance & Safety Inspections.',
    name: 'Hyderabad',
    address: 'Near RTC Complex, Vizianagaram, Andhra Pradesh 535001',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Vizianagaram',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Vizianagaram',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.202000618633!2d83.40000007426307!3d18.111951888192457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcfcf08e4eae3%3A0x8f624f8a7d15b3fa!2sVizianagaram!5e0!3m2!1sen!2sin!4v1750251600000!5m2!1sen!2sin',
    image: 'assets/img/Cars-CNG.png'
  },
   // card6
  {
    branch:'Vijayawada',
    description:'`Welcome to the Vijayawada  branch of Lavanya Enterprises, Located in the bustling automobile hub of Benz Circle, our Vijayawada branch is equipped to handle high-demand CNG retrofitments with precision and speed. Known for its busy roads and commercial traffic, the city presents unique fuel economy challenges — and Lavanya Enterprises addresses them with certified kits and expert service. Whether youre a private car owner or managing a fleet, we provide customized CNG solutions that reduce costs without compromising performance. Trusted by locals for our technical excellence and transparent service.',
    name: 'Vijayawada',
    address: 'Near RTC Complex, Vizianagaram, Andhra Pradesh 535001',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Vizianagaram',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Vizianagaram',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.202000618633!2d83.40000007426307!3d18.111951888192457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcfcf08e4eae3%3A0x8f624f8a7d15b3fa!2sVizianagaram!5e0!3m2!1sen!2sin!4v1750251600000!5m2!1sen!2sin',
    image: 'assets/img/cng-kit.jpg'
  },
   // card7
  {
    branch:'Rajamahendravaram',
    description:'`Welcome to the Rajamahendravaram branch of Lavanya Enterprises, Strategically located near Dowleswaram, the Rajamahendravaram branch of Lavanya Enterprises serves the Godavari region with advanced CNG retrofitment solutions. Known for its mix of urban and rural commuters, the city demands reliable fuel alternatives — and we deliver exactly that. Our branch is equipped with trained technicians, modern tools, and government-approved CNG kits to ensure your vehicle conversion is safe, seamless, and long-lasting. Join hundreds of satisfied vehicle owners who have switched to cleaner, smarter fuel in Rajahmundry.',
    name: 'Rajamahendravaram',
    address: 'Near RTC Complex, Vizianagaram, Andhra Pradesh 535001',
    mapLink: 'https://www.google.com/maps?q=Lavanya+Enterprises+Vizianagaram',
    directionLink: 'https://www.google.com/maps/dir//Lavanya+Enterprises+Vizianagaram',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.202000618633!2d83.40000007426307!3d18.111951888192457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcfcf08e4eae3%3A0x8f624f8a7d15b3fa!2sVizianagaram!5e0!3m2!1sen!2sin!4v1750251600000!5m2!1sen!2sin',
    image: 'assets/img/CNG-vehicle.jpg'
  },
  

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
