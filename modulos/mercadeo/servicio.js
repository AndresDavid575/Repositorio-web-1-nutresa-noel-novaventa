/**
 * Módulo: Mercadeo, Campañas y Fidelización
 * Célula: 7
 * Desarrollador: Andrés David
 * Historia de Usuario: HU-01 - Gestión de Cuentas de Fidelización (cuentas_fidelizacion)
 */

(function () {
    // Base de datos simulada de cuentas de fidelización
    const cuentasFidelizacion = [
        { id: 1, usuarioId: 101, puntos: 250, nivel: 'Bronce' },
        { id: 2, usuarioId: 102, puntos: 600, nivel: 'Plata' },
        { id: 3, usuarioId: 103, puntos: 1200, nivel: 'Oro' }
    ];

    window.mercadeoServicio = {
        // Función base del módulo
        async listarTodos() {
            return Promise.resolve(cuentasFidelizacion);
        },

        // Funcionalidades HU-01 (Andrés David)
        async consultarCuentaPorUsuario(usuarioId) {
            const cuenta = cuentasFidelizacion.find(c => c.usuarioId === usuarioId);
            return Promise.resolve(cuenta || null);
        },

        async acumularPuntos(usuarioId, cantidad) {
            let cuenta = cuentasFidelizacion.find(c => c.usuarioId === usuarioId);
            if (!cuenta) {
                cuenta = { id: cuentasFidelizacion.length + 1, usuarioId, puntos: 0, nivel: 'Bronce' };
                cuentasFidelizacion.push(cuenta);
            }
            cuenta.puntos += cantidad;
            
            // Regla de negocio para actualización de nivel
            if (cuenta.puntos >= 1000) cuenta.nivel = 'Oro';
            else if (cuenta.puntos >= 500) cuenta.nivel = 'Plata';
            else cuenta.nivel = 'Bronce';

            return Promise.resolve(cuenta);
        }
    };
})();