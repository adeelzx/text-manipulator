job("Example shell script") {
    container("ubuntu") {
        shellScript {
            content = """
                echo Hello
                echo World!
            """
        }
    }
}