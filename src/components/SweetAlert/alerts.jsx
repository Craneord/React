import React from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const mostrarAlerts= () => {
    swal({
        position: 'top-end',
        icon: 'success',
        title: 'compra realizada',
        showConfirmButton: false,
        timer: 1500
    })

}



export default mostrarAlerts
