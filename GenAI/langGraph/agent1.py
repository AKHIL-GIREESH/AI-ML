from langgraph.graph import StateGraph, START, END
from typing import TypedDict

class AgentState(TypedDict):
    message: str

def greet(state: AgentState) -> AgentState:
    return {"message": f"Hello! {state['message']}"}

def add_info(state: AgentState) -> AgentState:
    return {"message": state["message"] + " I'm your AI agent."}

graph = StateGraph(AgentState)

graph.add_node("greet", greet)
graph.add_node("add_info", add_info)

graph.set_entry_point("greet")
graph.add_edge("greet", "add_info")
graph.add_edge("add_info", END)

app = graph.compile()

result = app.invoke({"message": "Nice to meet you."})
print(result)
