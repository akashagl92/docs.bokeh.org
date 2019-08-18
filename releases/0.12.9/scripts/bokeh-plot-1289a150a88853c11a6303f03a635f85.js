(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("125a6648-3924-4034-9cb0-1854d22237bb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '125a6648-3924-4034-9cb0-1854d22237bb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"2953044e-78a7-4e7b-a730-7fa70ad84f0b":{"roots":{"references":[{"attributes":{},"id":"5781174c-11fd-4d76-8e92-eded144b2395","type":"BasicTicker"},{"attributes":{},"id":"fc603b82-28db-4c0e-a233-f2c95bde14e7","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1c6d97e8-87b6-49b5-b167-58b6872a8b72","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"895f55a8-3934-4ebb-a391-04fe3886aab1","subtype":"Figure","type":"Plot"},"ticker":{"id":"61e42f67-d7a0-4f7f-9d1d-f3eafc082777","type":"BasicTicker"}},"id":"06b14674-1d0b-4b96-b6a6-f5dc5a2734d0","type":"Grid"},{"attributes":{"formatter":{"id":"21ae06ed-eaf9-4f26-a4d7-5bce6ac89d11","type":"BasicTickFormatter"},"plot":{"id":"895f55a8-3934-4ebb-a391-04fe3886aab1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5781174c-11fd-4d76-8e92-eded144b2395","type":"BasicTicker"}},"id":"7c24720e-c84b-4545-aba2-560b6cf73208","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"52da9d47-bceb-407e-8122-cfbefdd66811","type":"PanTool"},{"id":"fc603b82-28db-4c0e-a233-f2c95bde14e7","type":"WheelZoomTool"},{"id":"13a39513-92e9-4b4c-80aa-ec5741a83d86","type":"BoxZoomTool"},{"id":"80a79241-84aa-4168-bd8a-2eb2515179b3","type":"SaveTool"},{"id":"a2daead1-2bfd-4be4-a105-3781a6a65842","type":"ResetTool"},{"id":"93920968-4664-45b8-a1ed-7a1e1c2e958d","type":"HelpTool"}]},"id":"c31b825e-2670-4ed7-b02d-4942a6d6a024","type":"Toolbar"},{"attributes":{},"id":"61e42f67-d7a0-4f7f-9d1d-f3eafc082777","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"895f55a8-3934-4ebb-a391-04fe3886aab1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5781174c-11fd-4d76-8e92-eded144b2395","type":"BasicTicker"}},"id":"c3c5af11-36da-437c-81b7-f51de0196534","type":"Grid"},{"attributes":{"callback":null},"id":"22cf4720-914c-491c-a9db-7134685d3f53","type":"DataRange1d"},{"attributes":{},"id":"80a79241-84aa-4168-bd8a-2eb2515179b3","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6217e3dd-b845-4255-91ad-6fc752a3ac81","type":"Circle"},{"attributes":{},"id":"93920968-4664-45b8-a1ed-7a1e1c2e958d","type":"HelpTool"},{"attributes":{},"id":"21ae06ed-eaf9-4f26-a4d7-5bce6ac89d11","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"33dcab5b-1946-4291-bace-2ee09af1c7d7","type":"BasicTickFormatter"},"plot":{"id":"895f55a8-3934-4ebb-a391-04fe3886aab1","subtype":"Figure","type":"Plot"},"ticker":{"id":"61e42f67-d7a0-4f7f-9d1d-f3eafc082777","type":"BasicTicker"}},"id":"cab22531-72e1-4d3b-a6c1-6ff020d96145","type":"LinearAxis"},{"attributes":{"below":[{"id":"cab22531-72e1-4d3b-a6c1-6ff020d96145","type":"LinearAxis"}],"left":[{"id":"7c24720e-c84b-4545-aba2-560b6cf73208","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cab22531-72e1-4d3b-a6c1-6ff020d96145","type":"LinearAxis"},{"id":"06b14674-1d0b-4b96-b6a6-f5dc5a2734d0","type":"Grid"},{"id":"7c24720e-c84b-4545-aba2-560b6cf73208","type":"LinearAxis"},{"id":"c3c5af11-36da-437c-81b7-f51de0196534","type":"Grid"},{"id":"1c6d97e8-87b6-49b5-b167-58b6872a8b72","type":"BoxAnnotation"},{"id":"b7fd0519-9e41-4aa6-ba86-2de22b493ef3","type":"GlyphRenderer"}],"title":{"id":"3c94e8d3-c0fb-4494-a4e5-ff16bb7f6fb9","type":"Title"},"toolbar":{"id":"c31b825e-2670-4ed7-b02d-4942a6d6a024","type":"Toolbar"},"x_range":{"id":"2a01d844-7f24-4d4f-81e2-464bf77a7861","type":"DataRange1d"},"x_scale":{"id":"fc8746be-433e-4242-b1e8-153d82b6205d","type":"LinearScale"},"y_range":{"id":"22cf4720-914c-491c-a9db-7134685d3f53","type":"DataRange1d"},"y_scale":{"id":"c4d53e9a-9f6a-4387-9818-d15c768f7a51","type":"LinearScale"}},"id":"895f55a8-3934-4ebb-a391-04fe3886aab1","subtype":"Figure","type":"Plot"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"3c94e8d3-c0fb-4494-a4e5-ff16bb7f6fb9","type":"Title"},{"attributes":{"data_source":{"id":"570b192b-123d-4588-a3e7-7c820e6bbf54","type":"ColumnDataSource"},"glyph":{"id":"6217e3dd-b845-4255-91ad-6fc752a3ac81","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bbb6949b-f6af-423b-977f-8ecfe23f9a44","type":"Circle"},"selection_glyph":null,"view":{"id":"60657693-750f-40c3-9bb6-77c18b2f8052","type":"CDSView"}},"id":"b7fd0519-9e41-4aa6-ba86-2de22b493ef3","type":"GlyphRenderer"},{"attributes":{},"id":"c4d53e9a-9f6a-4387-9818-d15c768f7a51","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"570b192b-123d-4588-a3e7-7c820e6bbf54","type":"ColumnDataSource"},{"attributes":{},"id":"fc8746be-433e-4242-b1e8-153d82b6205d","type":"LinearScale"},{"attributes":{},"id":"52da9d47-bceb-407e-8122-cfbefdd66811","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbb6949b-f6af-423b-977f-8ecfe23f9a44","type":"Circle"},{"attributes":{},"id":"a2daead1-2bfd-4be4-a105-3781a6a65842","type":"ResetTool"},{"attributes":{"callback":null},"id":"2a01d844-7f24-4d4f-81e2-464bf77a7861","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1c6d97e8-87b6-49b5-b167-58b6872a8b72","type":"BoxAnnotation"}},"id":"13a39513-92e9-4b4c-80aa-ec5741a83d86","type":"BoxZoomTool"},{"attributes":{"source":{"id":"570b192b-123d-4588-a3e7-7c820e6bbf54","type":"ColumnDataSource"}},"id":"60657693-750f-40c3-9bb6-77c18b2f8052","type":"CDSView"},{"attributes":{},"id":"33dcab5b-1946-4291-bace-2ee09af1c7d7","type":"BasicTickFormatter"}],"root_ids":["895f55a8-3934-4ebb-a391-04fe3886aab1"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2953044e-78a7-4e7b-a730-7fa70ad84f0b","elementid":"125a6648-3924-4034-9cb0-1854d22237bb","modelid":"895f55a8-3934-4ebb-a391-04fe3886aab1"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
