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
      };var element = document.getElementById("9220416a-0d15-41ed-a75c-ca79ec1f4ad7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9220416a-0d15-41ed-a75c-ca79ec1f4ad7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"5621296a-cb0e-4e3a-80ce-ed305324f573":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f503731b-f2b6-493a-ad08-47aaca2fdc4e","type":"AnnularWedge"},{"attributes":{},"id":"924996a1-3f32-456e-a258-d9aecc1ee4ae","type":"BasicTickFormatter"},{"attributes":{},"id":"f2496edc-776d-42f0-9a35-695274cc26d7","type":"UnionRenderers"},{"attributes":{},"id":"e7933d2d-5c87-4d39-93a6-fde395cde1a4","type":"BasicTicker"},{"attributes":{"data_source":{"id":"caa9fc6a-617b-4c2f-87db-b928e28fd6b3","type":"ColumnDataSource"},"glyph":{"id":"f503731b-f2b6-493a-ad08-47aaca2fdc4e","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3b6cec56-0cbb-4434-9c24-6b7bd608bf7a","type":"CDSView"}},"id":"ce569bd7-5764-43e8-855b-69e0449bfbaa","type":"GlyphRenderer"},{"attributes":{},"id":"ebb3aec9-8a7a-43d8-b630-c42b367e6419","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"5505bbba-507d-46b6-8d3b-c4df6a7d60b1","type":"Plot"},"ticker":{"id":"57dcc1ad-857b-4ab9-a2f8-cbd07511e3f7","type":"BasicTicker"}},"id":"a5ca86fd-5e20-4909-916f-9a1893df9720","type":"Grid"},{"attributes":{"below":[{"id":"35d49215-7a65-48f9-9148-21d8f8fca571","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4222bc1b-0071-4e69-a41b-0d23de7eb8f6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ce569bd7-5764-43e8-855b-69e0449bfbaa","type":"GlyphRenderer"},{"id":"35d49215-7a65-48f9-9148-21d8f8fca571","type":"LinearAxis"},{"id":"4222bc1b-0071-4e69-a41b-0d23de7eb8f6","type":"LinearAxis"},{"id":"6e8d97ed-bece-4f90-bdc2-fc184adf0dca","type":"Grid"},{"id":"a5ca86fd-5e20-4909-916f-9a1893df9720","type":"Grid"}],"title":null,"toolbar":{"id":"248a9ec9-e653-41d8-99e2-5006958095dd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"441b5a4b-5efe-477d-adc7-7c29630a39cc","type":"DataRange1d"},"x_scale":{"id":"c5b0270a-f979-46f6-b0d3-f1aace7468e9","type":"LinearScale"},"y_range":{"id":"54cf9a8c-97e7-4dff-9e8b-a61a0672f7a4","type":"DataRange1d"},"y_scale":{"id":"f71ef910-25e9-4e2a-9013-04b80647f14c","type":"LinearScale"}},"id":"5505bbba-507d-46b6-8d3b-c4df6a7d60b1","type":"Plot"},{"attributes":{"plot":{"id":"5505bbba-507d-46b6-8d3b-c4df6a7d60b1","type":"Plot"},"ticker":{"id":"e7933d2d-5c87-4d39-93a6-fde395cde1a4","type":"BasicTicker"}},"id":"6e8d97ed-bece-4f90-bdc2-fc184adf0dca","type":"Grid"},{"attributes":{"formatter":{"id":"ebb3aec9-8a7a-43d8-b630-c42b367e6419","type":"BasicTickFormatter"},"plot":{"id":"5505bbba-507d-46b6-8d3b-c4df6a7d60b1","type":"Plot"},"ticker":{"id":"57dcc1ad-857b-4ab9-a2f8-cbd07511e3f7","type":"BasicTicker"}},"id":"4222bc1b-0071-4e69-a41b-0d23de7eb8f6","type":"LinearAxis"},{"attributes":{"callback":null},"id":"54cf9a8c-97e7-4dff-9e8b-a61a0672f7a4","type":"DataRange1d"},{"attributes":{"formatter":{"id":"924996a1-3f32-456e-a258-d9aecc1ee4ae","type":"BasicTickFormatter"},"plot":{"id":"5505bbba-507d-46b6-8d3b-c4df6a7d60b1","type":"Plot"},"ticker":{"id":"e7933d2d-5c87-4d39-93a6-fde395cde1a4","type":"BasicTicker"}},"id":"35d49215-7a65-48f9-9148-21d8f8fca571","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"248a9ec9-e653-41d8-99e2-5006958095dd","type":"Toolbar"},{"attributes":{},"id":"d612466e-2099-4ec0-aa1a-e4172b68bc38","type":"Selection"},{"attributes":{},"id":"c5b0270a-f979-46f6-b0d3-f1aace7468e9","type":"LinearScale"},{"attributes":{},"id":"57dcc1ad-857b-4ab9-a2f8-cbd07511e3f7","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"d612466e-2099-4ec0-aa1a-e4172b68bc38","type":"Selection"},"selection_policy":{"id":"f2496edc-776d-42f0-9a35-695274cc26d7","type":"UnionRenderers"}},"id":"caa9fc6a-617b-4c2f-87db-b928e28fd6b3","type":"ColumnDataSource"},{"attributes":{},"id":"f71ef910-25e9-4e2a-9013-04b80647f14c","type":"LinearScale"},{"attributes":{"callback":null},"id":"441b5a4b-5efe-477d-adc7-7c29630a39cc","type":"DataRange1d"},{"attributes":{"source":{"id":"caa9fc6a-617b-4c2f-87db-b928e28fd6b3","type":"ColumnDataSource"}},"id":"3b6cec56-0cbb-4434-9c24-6b7bd608bf7a","type":"CDSView"}],"root_ids":["5505bbba-507d-46b6-8d3b-c4df6a7d60b1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5621296a-cb0e-4e3a-80ce-ed305324f573","roots":{"5505bbba-507d-46b6-8d3b-c4df6a7d60b1":"9220416a-0d15-41ed-a75c-ca79ec1f4ad7"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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