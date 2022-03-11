const CalculosUtils = {
    calcularTotalPagarTarifasPorServicio,
    calcularTotalPagarSubservicio,
    calcularExcesoPorSubservicio,
}

function calcularTotalPagarSubservicio (tarifa, consumo) {
    let totalPagar = 0
    if (consumo <= tarifa.limiteSubsidiado) {
        const valorSubsidiado = (tarifa.valorConsumo * consumo)
        totalPagar = valorSubsidiado + tarifa.otrosValoresSumatoria
    } else {
        const valorConSubsidio = (tarifa.valorConsumo * tarifa.limiteSubsidiado)
        const valorExceso = tarifa.valorConsumoExceso * (consumo - tarifa.limiteSubsidiado)
        totalPagar = valorConSubsidio + valorExceso + tarifa.otrosValoresSumatoria
    }
    return totalPagar
}

function calcularTotalPagarTarifasPorServicio(tarifas, consumo) {
    let totalPagar = 0;
    tarifas.forEach((tarifa) => {
        let total = 0;
        if (consumo <= tarifa.limiteSubsidiado) {
            const valorSubsidiado = (tarifa.valorConsumo * consumo);
            total = valorSubsidiado + tarifa.otrosValoresSumatoria;
        } else {
            const valorConSubsidio = (tarifa.valorConsumo * tarifa.limiteSubsidiado);
            const valorExceso = tarifa.valorConsumoExceso * (consumo - tarifa.limiteSubsidiado);
            total = valorConSubsidio + valorExceso + tarifa.otrosValoresSumatoria;
        }
        totalPagar += total;
    })
    return totalPagar;
}

function calcularExcesoPorSubservicio (tarifa, consumo) {
    let totalPagar = 0
    if (consumo > tarifa.limiteSubsidiado) {

        const valorExceso = tarifa.valorConsumoExceso * (consumo - tarifa.limiteSubsidiado)
        totalPagar = valorExceso
    }
    return totalPagar
}

export default CalculosUtils;