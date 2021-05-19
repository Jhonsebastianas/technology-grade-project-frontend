const CalculosUtils = {
    calcularTotalPagarTarifasPorServicio,
    calcularTotalPagarSubservicio,
    calcularExcesoPorSubservicio,
}

function calcularTotalPagarSubservicio (tarifa, consumo) {
    let totalPagar = 0
    if (consumo <= tarifa.limite_subsidiado) {
        const valorSubsidiado = (tarifa.valor_consumo * consumo)
        totalPagar = valorSubsidiado + tarifa.otros_valores_sumatoria
    } else {
        const valorConSubsidio = (tarifa.valor_consumo * tarifa.limite_subsidiado)
        const valorExceso = tarifa.valor_consumo_exceso * (consumo - tarifa.limite_subsidiado)
        totalPagar = valorConSubsidio + valorExceso + tarifa.otros_valores_sumatoria
    }
    return totalPagar
}

function calcularTotalPagarTarifasPorServicio(tarifas, consumo) {
    let totalPagar = 0
    tarifas.forEach((tarifa) => {
        let total = 0
        if (consumo <= tarifa.limite_subsidiado) {
            const valorSubsidiado = (tarifa.valor_consumo * consumo)
            total = valorSubsidiado + tarifa.otros_valores_sumatoria
        } else {
            const valorConSubsidio = (tarifa.valor_consumo * tarifa.limite_subsidiado)
            const valorExceso = tarifa.valor_consumo_exceso * (consumo - tarifa.limite_subsidiado)
            total = valorConSubsidio + valorExceso + tarifa.otros_valores_sumatoria
        }
        totalPagar += total
    })
    return totalPagar
}

function calcularExcesoPorSubservicio (tarifa, consumo) {
    let totalPagar = 0
    if (consumo > tarifa.limite_subsidiado) {

        const valorExceso = tarifa.valor_consumo_exceso * (consumo - tarifa.limite_subsidiado)
        totalPagar = valorExceso
    }
    return totalPagar
}

export default CalculosUtils