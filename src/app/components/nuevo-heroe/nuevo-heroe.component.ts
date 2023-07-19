import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrls: ['./nuevo-heroe.component.css']
})
export class NuevoHeroeComponent {

  imageUrlValue: string = '';
  formIngreso: FormGroup;

  @ViewChild('imagePreview', { static: false }) imagePreview!: ElementRef;

  constructor(private _heroService: HeroesService, private formBuilder: FormBuilder) {
    this.formIngreso = this.formBuilder.group({
      ciudadOrigen: ['', Validators.required],
      ciudadDestino: ['', Validators.required],
      precio: [0, Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  mostrarImagen(): void {
    const imageLink = this.formIngreso.get('img')?.value;

    // Comprobar si el enlace es válido y si termina con una extensión de imagen común
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const extension = imageLink.split('.').pop()?.toLowerCase() || '';
    if (imageExtensions.includes(extension)) {
      this.imageUrlValue = imageLink;
      this.imagePreview.nativeElement.innerHTML = `<img src="${imageLink}" alt="Imagen desde enlace">`;
    } else {
      this.imageUrlValue = '';
      this.imagePreview.nativeElement.innerHTML = '<p>El enlace no es una imagen válida.</p>';
    }
  }

  onSubmit() {
    if (this.formIngreso.valid) {
      this._heroService.addHero(this.formIngreso.value);
      console.log(this.formIngreso.value);
    } else {
      // Marcar todos los campos del formulario como tocados para mostrar mensajes de error
      Object.values(this.formIngreso.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}

