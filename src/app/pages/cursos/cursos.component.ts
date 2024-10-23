import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  cursos: any[] = [];

  ngOnInit() {
    this.cargarCursos();
  }

  // Cargar cursos desde el localStorage
  cargarCursos() {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos') || '[]');
    this.cursos = cursosGuardados;
  }

  // Eliminar curso
  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter(curso => curso.id !== id);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }

  // Mostrar/ocultar detalles del curso
  toggleDetalles(curso: any) {
    curso.mostrarDetalles = !curso.mostrarDetalles;
  }
}
