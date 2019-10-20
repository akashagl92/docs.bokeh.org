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
      };var element = document.getElementById("2547cddc-058a-4965-b839-4795142efd6c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2547cddc-058a-4965-b839-4795142efd6c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"b5b1d4d7-2b6a-431d-99fa-9da9c81d2034":{"roots":{"references":[{"attributes":{},"id":"326a165c-b0a3-4106-90ab-799c13d2e136","type":"BasicTickFormatter"},{"attributes":{},"id":"97516458-318d-4eaa-b7a3-42c13129a26d","type":"BasicTicker"},{"attributes":{},"id":"3fa7159a-0628-4012-aeea-f03b73a8b71d","type":"LinearScale"},{"attributes":{"data_source":{"id":"e24724ee-cc5b-4b1d-b640-5edaa2156739","type":"ColumnDataSource"},"glyph":{"id":"207d3bdc-75e2-4e19-8b45-d1f76547ff31","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2cc1b37e-e101-4d72-9335-68a46ec6caf6","type":"CDSView"}},"id":"b805fa2b-217e-4148-afcb-fa0e427dbcc0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"25846c9f-a4df-465a-87fc-ce86b7517868","type":"Plot"},"ticker":{"id":"97516458-318d-4eaa-b7a3-42c13129a26d","type":"BasicTicker"}},"id":"d437a9ff-dbc5-4280-a84e-5c110156d5cc","type":"Grid"},{"attributes":{"source":{"id":"e24724ee-cc5b-4b1d-b640-5edaa2156739","type":"ColumnDataSource"}},"id":"2cc1b37e-e101-4d72-9335-68a46ec6caf6","type":"CDSView"},{"attributes":{},"id":"ca855818-3504-4192-ab94-74604ae8e770","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"207d3bdc-75e2-4e19-8b45-d1f76547ff31","type":"Diamond"},{"attributes":{},"id":"e7cfc5fd-b5b3-4b2d-87a0-0dbd61e2919e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e7cfc5fd-b5b3-4b2d-87a0-0dbd61e2919e","type":"BasicTickFormatter"},"plot":{"id":"25846c9f-a4df-465a-87fc-ce86b7517868","type":"Plot"},"ticker":{"id":"f0f0787e-5856-465c-bd5b-6e86f54474c2","type":"BasicTicker"}},"id":"4560903b-a1ab-4d90-91bc-0cb028ae59f1","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"25846c9f-a4df-465a-87fc-ce86b7517868","type":"Plot"},"ticker":{"id":"f0f0787e-5856-465c-bd5b-6e86f54474c2","type":"BasicTicker"}},"id":"e8c2754a-810a-4c0c-b0e3-7b8efd0b589f","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5580f6c7-61e7-4d3a-a7f0-dcc1a696c672","type":"Toolbar"},{"attributes":{},"id":"f0f0787e-5856-465c-bd5b-6e86f54474c2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e6d33611-6ade-4ef6-9972-17f48e85c81d","type":"DataRange1d"},{"attributes":{"below":[{"id":"18a703d4-be73-4b5d-a0c2-a28d7b937410","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4560903b-a1ab-4d90-91bc-0cb028ae59f1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b805fa2b-217e-4148-afcb-fa0e427dbcc0","type":"GlyphRenderer"},{"id":"18a703d4-be73-4b5d-a0c2-a28d7b937410","type":"LinearAxis"},{"id":"4560903b-a1ab-4d90-91bc-0cb028ae59f1","type":"LinearAxis"},{"id":"d437a9ff-dbc5-4280-a84e-5c110156d5cc","type":"Grid"},{"id":"e8c2754a-810a-4c0c-b0e3-7b8efd0b589f","type":"Grid"}],"title":null,"toolbar":{"id":"5580f6c7-61e7-4d3a-a7f0-dcc1a696c672","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e6d33611-6ade-4ef6-9972-17f48e85c81d","type":"DataRange1d"},"x_scale":{"id":"ca855818-3504-4192-ab94-74604ae8e770","type":"LinearScale"},"y_range":{"id":"ff5e6a82-3132-4be4-933c-631d015c662e","type":"DataRange1d"},"y_scale":{"id":"3fa7159a-0628-4012-aeea-f03b73a8b71d","type":"LinearScale"}},"id":"25846c9f-a4df-465a-87fc-ce86b7517868","type":"Plot"},{"attributes":{"formatter":{"id":"326a165c-b0a3-4106-90ab-799c13d2e136","type":"BasicTickFormatter"},"plot":{"id":"25846c9f-a4df-465a-87fc-ce86b7517868","type":"Plot"},"ticker":{"id":"97516458-318d-4eaa-b7a3-42c13129a26d","type":"BasicTicker"}},"id":"18a703d4-be73-4b5d-a0c2-a28d7b937410","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"e24724ee-cc5b-4b1d-b640-5edaa2156739","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"ff5e6a82-3132-4be4-933c-631d015c662e","type":"DataRange1d"}],"root_ids":["25846c9f-a4df-465a-87fc-ce86b7517868"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"b5b1d4d7-2b6a-431d-99fa-9da9c81d2034","elementid":"2547cddc-058a-4965-b839-4795142efd6c","modelid":"25846c9f-a4df-465a-87fc-ce86b7517868"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
