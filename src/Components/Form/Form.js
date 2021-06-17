import React from "react";
import styles from "./Form.module.scss";
import BudgetForm from "../BudgetForm/BudgetForm";
import { connect } from "react-redux";
import { addItem } from "../../actions";

class Form extends React.Component {
  state = {
    title: "",
    cost: "",
    costType: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      costType: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      id: this.state.title,
      title: "",
      cost: "",
    });
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Add New</h1>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <input
              className={styles.inputTitle}
              type="text"
              name="title"
              placeholder="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <input
              className={styles.inputCost}
              type="number"
              name="cost"
              placeholder="cost"
              onChange={this.handleChange}
              value={this.state.cost}
            />
            <select
              onChange={this.handleSelect}
              value={this.state.value}
              className={styles.inputSelect}
              defaultValue={"Select"}
            >
              <option value="Select" disabled hidden>
                Select
              </option>
              {this.props.costList.map((item) => (
                <option value={item.title}>{item.title}</option>
              ))}
            </select>
            <input
              className={styles[`submit${this.state.costType}`]}
              type="submit"
              value="Add."
              disabled={this.state.costType === "" ? true : false}
            />
          </form>
          <BudgetForm />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { costList } = state;
  return { costList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, cost, costType) =>
      dispatch(addItem(title, cost, costType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
