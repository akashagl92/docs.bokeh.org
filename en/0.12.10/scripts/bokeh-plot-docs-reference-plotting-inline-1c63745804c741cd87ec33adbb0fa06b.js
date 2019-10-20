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
      };var element = document.getElementById("60afdf93-1b00-408d-976e-051b93e6aaee");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '60afdf93-1b00-408d-976e-051b93e6aaee' but no matching script tag was found. ")
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
                    var docs_json = {"bcf4fa0b-a7db-4b95-9388-ef323d299446":{"roots":{"references":[{"attributes":{},"id":"8f325b11-48dd-4b70-992f-7986c8293312","type":"SaveTool"},{"attributes":{"data_source":{"id":"d01655fb-9496-45aa-ad6d-f8ef933ac23f","type":"ColumnDataSource"},"glyph":{"id":"72debe58-f91e-42c3-96e5-d94383f22d19","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1e01792a-365f-4bd6-9bbc-1334beda05d1","type":"Diamond"},"selection_glyph":null,"view":{"id":"56806c8a-1275-4bf7-9dea-6f9f1ea91d15","type":"CDSView"}},"id":"de64c02b-3e85-4e72-89ca-aaa2d09edea3","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"bb4f405a-507d-44a4-a286-2637e25dd767","type":"BoxAnnotation"}},"id":"deafcbd4-1bfd-4051-9aa7-eb662d907c6b","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"eaf80d4b-0f21-4072-b79b-0e327cea2b82","type":"LinearAxis"}],"left":[{"id":"6aca19f6-42ea-48e8-9bff-f634c3c8b71c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"eaf80d4b-0f21-4072-b79b-0e327cea2b82","type":"LinearAxis"},{"id":"e85a3979-52cb-44bd-9bdd-3cd8dce7cb4c","type":"Grid"},{"id":"6aca19f6-42ea-48e8-9bff-f634c3c8b71c","type":"LinearAxis"},{"id":"3fa71ccc-5fbb-4a6b-a627-f81125c318c7","type":"Grid"},{"id":"bb4f405a-507d-44a4-a286-2637e25dd767","type":"BoxAnnotation"},{"id":"de64c02b-3e85-4e72-89ca-aaa2d09edea3","type":"GlyphRenderer"}],"title":{"id":"40316cfd-8c36-4abf-8ebc-013d34656286","type":"Title"},"toolbar":{"id":"529cdadb-9d9d-427f-bf8e-ddf76a15cedd","type":"Toolbar"},"x_range":{"id":"1c57fead-4214-41b5-950d-9a3f946b64ed","type":"DataRange1d"},"x_scale":{"id":"a4062bad-36f5-41c9-9ab6-441b4bf4d886","type":"LinearScale"},"y_range":{"id":"9fd98db9-5ac4-41e7-aeda-eac27cd890b7","type":"DataRange1d"},"y_scale":{"id":"4904032b-6bfd-4a02-9467-3013bf061176","type":"LinearScale"}},"id":"06389f45-7402-4b1d-8bc4-407a742db14e","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"06389f45-7402-4b1d-8bc4-407a742db14e","subtype":"Figure","type":"Plot"},"ticker":{"id":"131c7e5a-a771-4ef6-9635-d9eab394c564","type":"BasicTicker"}},"id":"3fa71ccc-5fbb-4a6b-a627-f81125c318c7","type":"Grid"},{"attributes":{"formatter":{"id":"1c28de06-a772-4972-bb45-f847808a474d","type":"BasicTickFormatter"},"plot":{"id":"06389f45-7402-4b1d-8bc4-407a742db14e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a32a0003-d1c5-464e-bcd0-71b58c93908e","type":"BasicTicker"}},"id":"eaf80d4b-0f21-4072-b79b-0e327cea2b82","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1c57fead-4214-41b5-950d-9a3f946b64ed","type":"DataRange1d"},{"attributes":{},"id":"3b1d1317-9538-459f-8836-eedd2b78c2b7","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"d01655fb-9496-45aa-ad6d-f8ef933ac23f","type":"ColumnDataSource"}},"id":"56806c8a-1275-4bf7-9dea-6f9f1ea91d15","type":"CDSView"},{"attributes":{},"id":"7088cf90-a133-4767-975d-12fea8bb8522","type":"PanTool"},{"attributes":{},"id":"a4062bad-36f5-41c9-9ab6-441b4bf4d886","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"72debe58-f91e-42c3-96e5-d94383f22d19","type":"Diamond"},{"attributes":{},"id":"071b9e90-23a0-4bb4-aefb-69c5778b86d8","type":"HelpTool"},{"attributes":{},"id":"131c7e5a-a771-4ef6-9635-d9eab394c564","type":"BasicTicker"},{"attributes":{},"id":"4904032b-6bfd-4a02-9467-3013bf061176","type":"LinearScale"},{"attributes":{},"id":"b337f98f-30e5-44ac-9a9b-45fea50f3b36","type":"ResetTool"},{"attributes":{"formatter":{"id":"3b1d1317-9538-459f-8836-eedd2b78c2b7","type":"BasicTickFormatter"},"plot":{"id":"06389f45-7402-4b1d-8bc4-407a742db14e","subtype":"Figure","type":"Plot"},"ticker":{"id":"131c7e5a-a771-4ef6-9635-d9eab394c564","type":"BasicTicker"}},"id":"6aca19f6-42ea-48e8-9bff-f634c3c8b71c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9fd98db9-5ac4-41e7-aeda-eac27cd890b7","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bb4f405a-507d-44a4-a286-2637e25dd767","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7088cf90-a133-4767-975d-12fea8bb8522","type":"PanTool"},{"id":"bf8b8f7f-bd0d-4ef5-818a-d0702a1b9cf6","type":"WheelZoomTool"},{"id":"deafcbd4-1bfd-4051-9aa7-eb662d907c6b","type":"BoxZoomTool"},{"id":"8f325b11-48dd-4b70-992f-7986c8293312","type":"SaveTool"},{"id":"b337f98f-30e5-44ac-9a9b-45fea50f3b36","type":"ResetTool"},{"id":"071b9e90-23a0-4bb4-aefb-69c5778b86d8","type":"HelpTool"}]},"id":"529cdadb-9d9d-427f-bf8e-ddf76a15cedd","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d01655fb-9496-45aa-ad6d-f8ef933ac23f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e01792a-365f-4bd6-9bbc-1334beda05d1","type":"Diamond"},{"attributes":{},"id":"a32a0003-d1c5-464e-bcd0-71b58c93908e","type":"BasicTicker"},{"attributes":{},"id":"1c28de06-a772-4972-bb45-f847808a474d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"06389f45-7402-4b1d-8bc4-407a742db14e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a32a0003-d1c5-464e-bcd0-71b58c93908e","type":"BasicTicker"}},"id":"e85a3979-52cb-44bd-9bdd-3cd8dce7cb4c","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"40316cfd-8c36-4abf-8ebc-013d34656286","type":"Title"},{"attributes":{},"id":"bf8b8f7f-bd0d-4ef5-818a-d0702a1b9cf6","type":"WheelZoomTool"}],"root_ids":["06389f45-7402-4b1d-8bc4-407a742db14e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"bcf4fa0b-a7db-4b95-9388-ef323d299446","elementid":"60afdf93-1b00-408d-976e-051b93e6aaee","modelid":"06389f45-7402-4b1d-8bc4-407a742db14e"}];
                
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
