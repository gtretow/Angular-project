import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  product: Product = { name: "", price: 1 };

  ngOnInit(): void {}
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
