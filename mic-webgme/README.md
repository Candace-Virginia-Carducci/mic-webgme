"# mic-webgme" 

MetaModel:
The metamodel first defines the FCO and the language that can be contained. The second 
sheet that has the state machine meta model on it defines the abstract StateBase and the
concrete implementations of it being the Intial, State and End nodes. It also defines a Transition in which the source and the destination are of the type StateBase. These are all contained in Base which has the FCO as its base. 

Example Model:
The example model of the a simple state machine is found inside the StateMachine node. It starts with a single Initial node. A transition from any state derived from StateBase can occur under two conditions: the first being a 0 input and the second being a 1 input. A 0 input only transitions to "even" states (2 and the initial state being even). The input of 1 can only tranisition to "odd" states (1 and the end state being odd). Thare are two states of type State and on of type End