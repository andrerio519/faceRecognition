import os
from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

class SecureHTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def setup(self):
        self.connection = self.request
        self.rfile = self.connection.makefile('rb', self.rbufsize)
        self.wfile = self.connection.makefile('wb', self.wbufsize)

def run(server_class=HTTPServer, handler_class=SecureHTTPRequestHandler, port=4443):
    server_address = ('', port)
    try:
        httpd = server_class(server_address, handler_class)

        # SSL Configuration
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        context.load_cert_chain('server.crt', 'server.key')
        
        httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

        print(f"Serving on https://localhost:{port}")
        httpd.serve_forever()
    except Exception as e:
        print(f"Error starting server: {e}")

if __name__ == '__main__':
    run()