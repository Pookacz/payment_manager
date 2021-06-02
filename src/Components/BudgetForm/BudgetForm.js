
import React from "react";
import styles from "./BudgetForm.module.scss";
import { connect } from "react-redux";
import { addBudget } from "../../actions";

class BudgetForm extends React.Component {
    state = {
        budget: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBudget(this.state);
        this.setState({
          budget: this.state.budget,
        });
      };

  render() {
    return (
      <>
        <h1 className={styles.title}>Set Budget</h1>
        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <input
            className={styles.input}
            type="number"
            name="budget"
            placeholder="budget"
            onChange={this.handleChange}
            value={this.state.budget}
          />
          <input
            className={styles.submit}
            type="submit"
            value="Set."
            disabled={this.state.budget === "" ? true : false}
          />
        </form>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addBudget: (budget) =>
        dispatch(addBudget(budget)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(BudgetForm);
