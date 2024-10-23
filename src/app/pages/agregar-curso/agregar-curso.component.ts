import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar-curso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-curso.component.html',
  styleUrl: './agregar-curso.component.scss'
})
export class AgregarCursoComponent {

  nombreCurso: string = '';
  nombreInstructor: string = '';
  fechaInicio: string = '';
  duracion: number | null = null;
  descripcion: string = '';

  agregarCurso() {
    if (this.validarFormulario()) {
      const curso = {
        id: Date.now(),
        nombreCurso: this.nombreCurso,
        nombreInstructor: this.nombreInstructor,
        fechaInicio: this.fechaInicio,
        duracion: this.duracion,
        descripcion: this.descripcion
      };

      this.guardarCurso(curso);
      this.resetFormulario();
      alert('Curso agregado exitosamente.');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  // Validar el formulario
  validarFormulario(): boolean {
    return this.nombreCurso !== '' && this.nombreInstructor !== '' && this.fechaInicio !== '' && this.duracion !== null && this.descripcion !== '';
  }

  // Guardar el curso en localStorage
  guardarCurso(curso: any) {
    let cursos = JSON.parse(localStorage.getItem('cursos') || '[]');
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
  }

  // Reiniciar el formulario
  resetFormulario() {
    this.nombreCurso = '';
    this.nombreInstructor = '';
    this.fechaInicio = '';
    this.duracion = null;
    this.descripcion = '';
  }
}
