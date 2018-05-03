import React, { Component } from "react";

class Formulage extends Component {
  state = {
    leukocyty: 0,
    erytrocyty: 0,
    hemoglobina: 0,
    hematokryt: 0,
    mcv: 0,
    mch: 0,
    płytki: 0,
    płytkiObj: 0,
    neurocyty: 0,
    limfocyty: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let wynik = "";
    let status = "";
    if (
      this.state.płytkiObj < 8 &&
      this.state.neurocyty > 70 &&
      this.state.limfocyty < 26.4
    ) {
      wynik = "Małopłytkowość \n";
    }

    if (
      this.state.erytrocyty < 3.8 &&
      this.state.hemoglobina < 12 &&
      this.state.hematokryt < 37 &&
      this.state.limfocyty < 26.4
    ) {
      wynik += "Anemia \n";
    }

    if (
      this.state.leukocyty < 4 &&
      this.state.erytrocyty < 3.8 &&
      this.state.hemoglobina < 12 &&
      this.state.hematokryt < 37
    ) {
      wynik += "Białaczka \n";
    }

    if (
      this.state.erytrocyty > 5.2 &&
      this.state.hemoglobina > 16 &&
      this.state.mcv > 97 &&
      this.state.mch > 34 &&
      this.state.płytkiObj > 11
    ) {
      wynik += "Nadkrwistość \n";
    }

    if (this.state.płytki > 400) {
      wynik += "Nadpłytkowość \n";
    }

    if (
      this.state.hemoglobina < 12 &&
      this.state.hematokryt < 37 &&
      this.state.mch < 27
    ) {
      wynik += "Niedobór żelaza \n";
    }

    if (this.state.limfocyty > 49.2) {
      wynik += "Nadczynność tarczycy \n";
    }

    if (this.state.limfocyty < 26.4) {
      wynik += "AIDS \n";
    }

    if (this.state.leukocyty < 4 && this.state.erytrocyty < 3.8) {
      wynik += "Aplazja szpiku \n";
    }

    if (this.state.erytrocyty > 5.2) {
      wynik += "Brak witaminy B12 \n";
    }

    if (
      this.state.erytrocyty > 5.2 &&
      this.state.hemoglobina > 16 &&
      this.state.hematokryt > 47
    ) {
      wynik += "Anemia hemolityczna \n";
    }

    if (
      this.state.erytrocyty > 5.2 &&
      this.state.hemoglobina > 16 &&
      this.state.mcv > 97 &&
      this.state.mch > 34
    ) {
      wynik += "Anemia sierpowata \n";
    }

    if (this.state.leukocyty > 10.5) {
      wynik += "Zapalenie wyrostka \n";
    }

    if (this.state.leukocyty > 10.5 && this.state.neurocyty > 70) {
      wynik += "Zapalenie nerek \n";
    }

    if (this.state.leukocyty > 10.5 && this.state.neurocyty > 70) {
      wynik += "Bakteryjne zapalenie płuc \n";
    }

    if (
      this.state.leukocyty > 10.5 &&
      this.state.neurocyty > 70 &&
      this.state.limfocyty > 49.2
    ) {
      wynik += "Nowotwór \n";
    }

    if (this.state.neurocyty > 70) {
      wynik += "Bakteryjne skażenie skóry \n";
    }

    if (
      this.state.leukocyty > 4 &&
      this.state.leukocyty < 10.5 &&
      this.state.erytrocyty > 3.8 &&
      this.state.erytrocyty < 5.2 &&
      this.state.hemoglobina > 12 &&
      this.state.hemoglobina < 16 &&
      this.state.hematokryt > 37 &&
      this.state.hematokryt < 47 &&
      this.state.mcv > 80 &&
      this.state.mcv < 97 &&
      this.state.mch > 27 &&
      this.state.mch < 34 &&
      this.state.płytki > 130 &&
      this.state.płytki < 400 &&
      this.state.płytkiObj > 8 &&
      this.state.płytkiObj < 11 &&
      this.state.neurocyty > 45 &&
      this.state.neurocyty < 70 &&
      this.state.limfocyty > 26.4 &&
      this.state.limfocyty < 49.2
    ) {
      wynik = "Brak chorób";
      status = "Negatywny";
    } else {
      status = "Pozytywny";
    }

    this.props.setFormulageStatus(status);
    this.props.formulageResoult(wynik);
    this.props.dbSynchronise(wynik);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <label className="form__label">
            Leukocyty
            <span className="form__value">{this.state.leukocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="0.1"
            name="leukocyty"
            value={this.state.leukocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Erytrocyty
            <span className="form__value">{this.state.erytrocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            name="erytrocyty"
            value={this.state.erytrocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Hemoglobina
            <span className="form__value">{this.state.hemoglobina}</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="0.1"
            name="hemoglobina"
            value={this.state.hemoglobina}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Hematokryt
            <span className="form__value">{this.state.hematokryt}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="hematokryt"
            value={this.state.hematokryt}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Śr. obj. erytrocytów (MCV)
            <span className="form__value">{this.state.mcv}</span>
          </label>
          <input
            type="range"
            min="1"
            max="200"
            step="1"
            name="mcv"
            value={this.state.mcv}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Śr. zawartość HGB w erytrocytach (MCH)
            <span className="form__value">{this.state.mch}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="mch"
            value={this.state.mch}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Płytki krwi
            <span className="form__value">{this.state.płytki}</span>
          </label>
          <input
            type="range"
            min="100"
            max="800"
            step="1"
            name="płytki"
            value={this.state.płytki}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Śr. obj. płytek krwi
            <span className="form__value">{this.state.płytkiObj}</span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            name="płytkiObj"
            value={this.state.płytkiObj}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Neurocyty
            <span className="form__value">{this.state.neurocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="400"
            step="1"
            name="neurocyty"
            value={this.state.neurocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Limfocyty
            <span className="form__value">{this.state.limfocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="300"
            step="0.1"
            name="limfocyty"
            value={this.state.limfocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <input className="form__submit" type="submit" value="Zobacz wynik" />
        </div>
      </form>
    );
  }
}

export default Formulage;
