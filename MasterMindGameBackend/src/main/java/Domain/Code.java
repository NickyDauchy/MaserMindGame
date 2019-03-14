package Domain;

public class Code {

    private Pin[] code;
    private Pin[] guess;

    public void makeGuess(Pin... pins) {
        this.guess = pins;
    }

    public void enterCode(Pin... pins) {
        this.code = pins;
    }
}
