import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPage implements OnInit {
  itemId: string | null; // Store item ID as string or null
  itemDetails: any; // Replace 'any' with the actual type for item details

  constructor(private route: ActivatedRoute) {
    // Get the item ID from the route parameters
    this.itemId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // Fetch item details based on the item ID
    if (this.itemId) {
      this.fetchItemDetails(this.itemId);
    }
  }

  fetchItemDetails(id: string) {
    // Mock data retrieval for demonstration purposes
    // Replace this with actual service call to fetch item details
    this.itemDetails = this.mockData(id);
  }

  // Mock data function to simulate fetching details
  private mockData(id: string) {
    const data = [
      { id: '1', name: 'Item One', description: 'Description for item one', price: 10.99 },
      { id: '2', name: 'Item Two', description: 'Description for item two', price: 12.99 },
      { id: '3', name: 'Item Three', description: 'Description for item three', price: 15.99 },
    ];
    return data.find(item => item.id === id) || null; // Find item by ID or return null
  }
}
