package Domain;

public class Code {

    private Pin[] code;


    public Feedback makeGuess(Guess guess) {
        compareGuessToCode(guess);
        return null;
    }

    private void compareGuessToCode(Guess guess) {
        throw new UnsupportedOperationException("Implement me after test!");
    }

    public void create(Pin... pins) {
        this.code = pins;
    }
}
