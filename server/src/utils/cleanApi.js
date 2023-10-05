const driverLimpio = (driver) =>{
    return {       
            id: driver?.id,
            name: driver?.name?.forename,
            lastname: driver?.name?.surname,
            img:
                driver.image?.url?.length >= 5
                ? driver?.image?.url
                : "https://imgs.search.brave.com/zotpEsPZaUztEMA9jmbvqJY09Qv0n_wZCE9RXej37aw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9tYXRlX2x1/bl8yMjVfdGljb19j/YXJzXzk2OWUzMjY0/LmpwZWc_cmVnaW9u/PTAsMCwxMzczLDg0/MA",
            nationality: driver?.nationality,
            description: driver?.description,
            nacimiento: driver?.dob,
            teams: driver?.teams,
            created: false,
    }
    
}
module.exports = driverLimpio;