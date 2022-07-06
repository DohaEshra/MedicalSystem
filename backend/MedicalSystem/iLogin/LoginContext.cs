using MedicalSystem.Models;

namespace MedicalSystem.iLogin
{
    public class LoginContext
    {
        private iLogin state;
        private AccountUser user;
        public LoginContext(iLogin _state, AccountUser _user)
        {
            state = _state;
            user = _user;
        }

        public void setState(iLogin _state)
        {
            this.state = _state;
        }

        public void request()
        {
            this.state.login(this, user);
        }
    }
}
