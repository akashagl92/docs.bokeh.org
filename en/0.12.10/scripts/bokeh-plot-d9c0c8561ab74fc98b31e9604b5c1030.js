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
      };var element = document.getElementById("7fc7d5e5-9b3f-44ea-8611-1f69a0c920b0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7fc7d5e5-9b3f-44ea-8611-1f69a0c920b0' but no matching script tag was found. ")
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
                    var docs_json = {"3b5c9726-14af-46da-8d17-a1bd1cfd9ffc":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"fdedcb49-05ea-4962-ae43-8d049eda845a","type":"ColumnDataSource"},{"attributes":{},"id":"cceac628-e49b-46ec-8a74-02711cef9659","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"f2fdeb47-e0f0-4c60-85d7-de0fa7e21962","type":"VBar"},{"attributes":{"formatter":{"id":"674e604c-03f5-45c2-9212-76721642a996","type":"BasicTickFormatter"},"plot":{"id":"5f15e3a5-780d-4962-ad7a-1683705a9ca7","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bf50417-b1f0-481a-8287-4200aa3ce5aa","type":"BasicTicker"}},"id":"71acedd7-8cf3-42be-825b-1ad33e12eeca","type":"LinearAxis"},{"attributes":{},"id":"044d7157-790d-4ef2-8e63-ca0840872d8a","type":"CategoricalTicker"},{"attributes":{},"id":"0cef7181-d749-42d4-b1f5-c66cff002eca","type":"CategoricalScale"},{"attributes":{"line_color":{"value":"red"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d0eecbba-dd9f-4ba3-ad61-6200cf79d76f","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"b99774ee-58fa-4eb7-9999-0eeb6c66f41b","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"4853469f-4580-4e30-83b6-298f7548a812","type":"DataRange1d"},{"attributes":{"formatter":{"id":"cceac628-e49b-46ec-8a74-02711cef9659","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"5f15e3a5-780d-4962-ad7a-1683705a9ca7","subtype":"Figure","type":"Plot"},"ticker":{"id":"044d7157-790d-4ef2-8e63-ca0840872d8a","type":"CategoricalTicker"}},"id":"85d7b9b9-43f4-43ed-80a8-fc15419dfa87","type":"CategoricalAxis"},{"attributes":{},"id":"a8420b60-e58e-48a0-bb64-7716e3412497","type":"LinearScale"},{"attributes":{"data_source":{"id":"fdedcb49-05ea-4962-ae43-8d049eda845a","type":"ColumnDataSource"},"glyph":{"id":"f2fdeb47-e0f0-4c60-85d7-de0fa7e21962","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44100f4c-62c7-4403-be86-0b380ef9d25e","type":"VBar"},"selection_glyph":null,"view":{"id":"019fd5d0-c01a-45e3-84a5-241454e0375f","type":"CDSView"}},"id":"e5b31faf-28a4-48fe-b73e-7e9336c8797b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"44100f4c-62c7-4403-be86-0b380ef9d25e","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"4fbff1c5-5466-4491-b610-72d46e302ec5","type":"ColumnDataSource"},{"attributes":{},"id":"674e604c-03f5-45c2-9212-76721642a996","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"85d7b9b9-43f4-43ed-80a8-fc15419dfa87","type":"CategoricalAxis"}],"left":[{"id":"71acedd7-8cf3-42be-825b-1ad33e12eeca","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"85d7b9b9-43f4-43ed-80a8-fc15419dfa87","type":"CategoricalAxis"},{"id":"9e5eb578-9eb8-4a7b-9499-90a4840e6c2b","type":"Grid"},{"id":"71acedd7-8cf3-42be-825b-1ad33e12eeca","type":"LinearAxis"},{"id":"52ba2b56-5896-48ac-87d2-693c3b7d0e0a","type":"Grid"},{"id":"e5b31faf-28a4-48fe-b73e-7e9336c8797b","type":"GlyphRenderer"},{"id":"17664adf-c619-48a3-9007-a2a29cccbc4d","type":"GlyphRenderer"}],"title":{"id":"b99774ee-58fa-4eb7-9999-0eeb6c66f41b","type":"Title"},"toolbar":{"id":"54177219-c184-4846-a0c8-1f04916f4f95","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c3081f52-b640-41cc-ad24-9beb566b4081","type":"FactorRange"},"x_scale":{"id":"0cef7181-d749-42d4-b1f5-c66cff002eca","type":"CategoricalScale"},"y_range":{"id":"4853469f-4580-4e30-83b6-298f7548a812","type":"DataRange1d"},"y_scale":{"id":"a8420b60-e58e-48a0-bb64-7716e3412497","type":"LinearScale"}},"id":"5f15e3a5-780d-4962-ad7a-1683705a9ca7","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"fdedcb49-05ea-4962-ae43-8d049eda845a","type":"ColumnDataSource"}},"id":"019fd5d0-c01a-45e3-84a5-241454e0375f","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c99bf16-90bc-4ceb-9dbe-05bc858be389","type":"Line"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"c3081f52-b640-41cc-ad24-9beb566b4081","type":"FactorRange"},{"attributes":{"source":{"id":"4fbff1c5-5466-4491-b610-72d46e302ec5","type":"ColumnDataSource"}},"id":"f59e077c-21e9-4fcc-ba64-b13b16f90090","type":"CDSView"},{"attributes":{"data_source":{"id":"4fbff1c5-5466-4491-b610-72d46e302ec5","type":"ColumnDataSource"},"glyph":{"id":"d0eecbba-dd9f-4ba3-ad61-6200cf79d76f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9c99bf16-90bc-4ceb-9dbe-05bc858be389","type":"Line"},"selection_glyph":null,"view":{"id":"f59e077c-21e9-4fcc-ba64-b13b16f90090","type":"CDSView"}},"id":"17664adf-c619-48a3-9007-a2a29cccbc4d","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5f15e3a5-780d-4962-ad7a-1683705a9ca7","subtype":"Figure","type":"Plot"},"ticker":{"id":"044d7157-790d-4ef2-8e63-ca0840872d8a","type":"CategoricalTicker"}},"id":"9e5eb578-9eb8-4a7b-9499-90a4840e6c2b","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"54177219-c184-4846-a0c8-1f04916f4f95","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"5f15e3a5-780d-4962-ad7a-1683705a9ca7","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bf50417-b1f0-481a-8287-4200aa3ce5aa","type":"BasicTicker"}},"id":"52ba2b56-5896-48ac-87d2-693c3b7d0e0a","type":"Grid"},{"attributes":{},"id":"4bf50417-b1f0-481a-8287-4200aa3ce5aa","type":"BasicTicker"}],"root_ids":["5f15e3a5-780d-4962-ad7a-1683705a9ca7"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"3b5c9726-14af-46da-8d17-a1bd1cfd9ffc","elementid":"7fc7d5e5-9b3f-44ea-8611-1f69a0c920b0","modelid":"5f15e3a5-780d-4962-ad7a-1683705a9ca7"}];
                
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
