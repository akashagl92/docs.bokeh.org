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
      };var element = document.getElementById("9f2ed13a-829f-4119-bb5f-93fcf25cfcc9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f2ed13a-829f-4119-bb5f-93fcf25cfcc9' but no matching script tag was found. ")
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
                    var docs_json = {"0aa13a70-d08a-4095-a6ae-91d52a872514":{"roots":{"references":[{"attributes":{"data_source":{"id":"a20f9460-7236-4ba2-b166-bafae4d8fc77","type":"ColumnDataSource"},"glyph":{"id":"197e1c98-eed6-4b3b-be44-b338036ca02b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"885ca433-336f-4f74-a315-0a1b0f391e74","type":"Line"},"selection_glyph":null,"view":{"id":"ea3f8d7c-274f-4a12-9e4d-c3e0d369fd2c","type":"CDSView"}},"id":"5f74d0d8-9956-4357-8bb6-37b11407ee0b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"b4fab946-0e5a-480a-b6ec-cb0b12e1d506","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"a96d934e-d1b4-4b24-9c48-aa3156c5c164","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"e9a42361-f43b-4c53-bb93-42cf370f059d","type":"FactorRange"},{"attributes":{"source":{"id":"a20f9460-7236-4ba2-b166-bafae4d8fc77","type":"ColumnDataSource"}},"id":"ea3f8d7c-274f-4a12-9e4d-c3e0d369fd2c","type":"CDSView"},{"attributes":{"below":[{"id":"b1cdba55-db85-4c36-962f-4d07e35e92c3","type":"CategoricalAxis"}],"left":[{"id":"52b2ff73-98bc-40eb-95d6-9ca1bfa81640","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"b1cdba55-db85-4c36-962f-4d07e35e92c3","type":"CategoricalAxis"},{"id":"40e234c7-2f00-442c-802a-d49b47977603","type":"Grid"},{"id":"52b2ff73-98bc-40eb-95d6-9ca1bfa81640","type":"LinearAxis"},{"id":"87500c20-afb2-4d27-89fe-b6378eb87b9b","type":"Grid"},{"id":"02d0ecf9-2e23-4481-8720-d2c2702250e9","type":"GlyphRenderer"},{"id":"5f74d0d8-9956-4357-8bb6-37b11407ee0b","type":"GlyphRenderer"}],"title":{"id":"a9a478d1-cdfe-4648-80b3-0ae2b5be45d3","type":"Title"},"toolbar":{"id":"560deda5-4c42-4055-8d19-4523edb449b4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e9a42361-f43b-4c53-bb93-42cf370f059d","type":"FactorRange"},"x_scale":{"id":"4e35b5db-8ca4-48c7-a043-336c290b12d9","type":"CategoricalScale"},"y_range":{"id":"419498ee-0e26-4098-9fcd-f847b0302213","type":"DataRange1d"},"y_scale":{"id":"231dbb67-033b-440e-a15f-49e0b20c57f9","type":"LinearScale"}},"id":"e0a9297e-7f4a-4fc6-9726-e2ccbce4a383","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"885ca433-336f-4f74-a315-0a1b0f391e74","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"560deda5-4c42-4055-8d19-4523edb449b4","type":"Toolbar"},{"attributes":{"formatter":{"id":"e516d1d6-fe1c-4998-9022-e4c92e2a19ed","type":"BasicTickFormatter"},"plot":{"id":"e0a9297e-7f4a-4fc6-9726-e2ccbce4a383","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bfacb88-daed-47d3-be66-1c882d8ab1d0","type":"BasicTicker"}},"id":"52b2ff73-98bc-40eb-95d6-9ca1bfa81640","type":"LinearAxis"},{"attributes":{"line_color":{"value":"red"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"197e1c98-eed6-4b3b-be44-b338036ca02b","type":"Line"},{"attributes":{"callback":null,"start":0},"id":"419498ee-0e26-4098-9fcd-f847b0302213","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"e0a9297e-7f4a-4fc6-9726-e2ccbce4a383","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bfacb88-daed-47d3-be66-1c882d8ab1d0","type":"BasicTicker"}},"id":"87500c20-afb2-4d27-89fe-b6378eb87b9b","type":"Grid"},{"attributes":{},"id":"4e35b5db-8ca4-48c7-a043-336c290b12d9","type":"CategoricalScale"},{"attributes":{},"id":"6faa5d6a-8323-48c9-8b01-ebfc52b61261","type":"CategoricalTicker"},{"attributes":{},"id":"231dbb67-033b-440e-a15f-49e0b20c57f9","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"a20f9460-7236-4ba2-b166-bafae4d8fc77","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e0a9297e-7f4a-4fc6-9726-e2ccbce4a383","subtype":"Figure","type":"Plot"},"ticker":{"id":"6faa5d6a-8323-48c9-8b01-ebfc52b61261","type":"CategoricalTicker"}},"id":"40e234c7-2f00-442c-802a-d49b47977603","type":"Grid"},{"attributes":{},"id":"e516d1d6-fe1c-4998-9022-e4c92e2a19ed","type":"BasicTickFormatter"},{"attributes":{},"id":"fa3c1ac6-e2c4-4c8d-b90a-deeb08827340","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"fa3c1ac6-e2c4-4c8d-b90a-deeb08827340","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"e0a9297e-7f4a-4fc6-9726-e2ccbce4a383","subtype":"Figure","type":"Plot"},"ticker":{"id":"6faa5d6a-8323-48c9-8b01-ebfc52b61261","type":"CategoricalTicker"}},"id":"b1cdba55-db85-4c36-962f-4d07e35e92c3","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"bd5ca78f-82dd-49bb-ac93-11395a0e8831","type":"VBar"},{"attributes":{"data_source":{"id":"a96d934e-d1b4-4b24-9c48-aa3156c5c164","type":"ColumnDataSource"},"glyph":{"id":"b4fab946-0e5a-480a-b6ec-cb0b12e1d506","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bd5ca78f-82dd-49bb-ac93-11395a0e8831","type":"VBar"},"selection_glyph":null,"view":{"id":"478b71a8-0f9c-40d7-9adf-30abcb9f1267","type":"CDSView"}},"id":"02d0ecf9-2e23-4481-8720-d2c2702250e9","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"a9a478d1-cdfe-4648-80b3-0ae2b5be45d3","type":"Title"},{"attributes":{"source":{"id":"a96d934e-d1b4-4b24-9c48-aa3156c5c164","type":"ColumnDataSource"}},"id":"478b71a8-0f9c-40d7-9adf-30abcb9f1267","type":"CDSView"},{"attributes":{},"id":"1bfacb88-daed-47d3-be66-1c882d8ab1d0","type":"BasicTicker"}],"root_ids":["e0a9297e-7f4a-4fc6-9726-e2ccbce4a383"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"0aa13a70-d08a-4095-a6ae-91d52a872514","elementid":"9f2ed13a-829f-4119-bb5f-93fcf25cfcc9","modelid":"e0a9297e-7f4a-4fc6-9726-e2ccbce4a383"}];
                
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
