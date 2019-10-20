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
      };var element = document.getElementById("6e9d2ebb-8743-4d51-a411-a3320069b132");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e9d2ebb-8743-4d51-a411-a3320069b132' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"bbb5fb43-bf62-4723-b4b1-0aaf9e9dd8f0":{"roots":{"references":[{"attributes":{"data_source":{"id":"333c0dab-16dc-4348-83ee-b8142cb41857","type":"ColumnDataSource"},"glyph":{"id":"7b7648b6-52cc-4b68-b789-293125605d08","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59287043-6550-4732-b4d0-31ae7c8ece89","type":"VBar"},"selection_glyph":null,"view":{"id":"48cf0de6-4d1a-4867-8a5c-1ef3699cb5d7","type":"CDSView"}},"id":"9125b7cf-ee38-4f1e-92a5-d0be31fff45a","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"225a78b4-e79c-4f57-99ee-b33902eeec40","type":"DataRange1d"},{"attributes":{},"id":"5820bbca-45a7-4033-a9b9-245af7f32246","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"e0b55eb3-9d9f-41eb-b343-ac069da3173e","subtype":"Figure","type":"Plot"},"ticker":{"id":"338ef683-2b39-4b14-a839-2c5fb0bf529f","type":"BasicTicker"}},"id":"f2ad3778-7ea3-468e-8928-8cb81aa9eed5","type":"Grid"},{"attributes":{},"id":"b6994a53-3d4c-46d5-a56a-e32687027909","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"e860cffe-0457-40cb-9bdf-e3d642fa4c55","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e0b55eb3-9d9f-41eb-b343-ac069da3173e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5820bbca-45a7-4033-a9b9-245af7f32246","type":"CategoricalTicker"}},"id":"88a890e7-6b59-499b-93bc-021400068c47","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"59287043-6550-4732-b4d0-31ae7c8ece89","type":"VBar"},{"attributes":{},"id":"d9250530-15c3-4146-880b-dc671287b87a","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"7b7648b6-52cc-4b68-b789-293125605d08","type":"VBar"},{"attributes":{},"id":"9f7b30f4-0cdc-42cc-835c-b6c087b45d3b","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"5c09c243-9a74-4fa8-ba90-935e19dd235e","type":"Title"},{"attributes":{},"id":"da093bd8-8404-47ef-b653-3e86a8ab9514","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7facb266-86fd-43a5-9313-b236e1c100ea","type":"Toolbar"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]},"selected":{"id":"ef693abd-6d51-41eb-93f4-9d9dba705d82","type":"Selection"},"selection_policy":{"id":"da434428-a315-4d3b-9877-a9a858758c4f","type":"UnionRenderers"}},"id":"333c0dab-16dc-4348-83ee-b8142cb41857","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"b6994a53-3d4c-46d5-a56a-e32687027909","type":"CategoricalTickFormatter"},"plot":{"id":"e0b55eb3-9d9f-41eb-b343-ac069da3173e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5820bbca-45a7-4033-a9b9-245af7f32246","type":"CategoricalTicker"}},"id":"077154f0-fbc2-40c9-80be-a29562422072","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"9f7b30f4-0cdc-42cc-835c-b6c087b45d3b","type":"BasicTickFormatter"},"plot":{"id":"e0b55eb3-9d9f-41eb-b343-ac069da3173e","subtype":"Figure","type":"Plot"},"ticker":{"id":"338ef683-2b39-4b14-a839-2c5fb0bf529f","type":"BasicTicker"}},"id":"f1468eed-8550-4f20-bf8a-caa5eec7ef64","type":"LinearAxis"},{"attributes":{"source":{"id":"333c0dab-16dc-4348-83ee-b8142cb41857","type":"ColumnDataSource"}},"id":"48cf0de6-4d1a-4867-8a5c-1ef3699cb5d7","type":"CDSView"},{"attributes":{},"id":"ef693abd-6d51-41eb-93f4-9d9dba705d82","type":"Selection"},{"attributes":{},"id":"338ef683-2b39-4b14-a839-2c5fb0bf529f","type":"BasicTicker"},{"attributes":{},"id":"da434428-a315-4d3b-9877-a9a858758c4f","type":"UnionRenderers"},{"attributes":{"below":[{"id":"077154f0-fbc2-40c9-80be-a29562422072","type":"CategoricalAxis"}],"left":[{"id":"f1468eed-8550-4f20-bf8a-caa5eec7ef64","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"077154f0-fbc2-40c9-80be-a29562422072","type":"CategoricalAxis"},{"id":"88a890e7-6b59-499b-93bc-021400068c47","type":"Grid"},{"id":"f1468eed-8550-4f20-bf8a-caa5eec7ef64","type":"LinearAxis"},{"id":"f2ad3778-7ea3-468e-8928-8cb81aa9eed5","type":"Grid"},{"id":"9125b7cf-ee38-4f1e-92a5-d0be31fff45a","type":"GlyphRenderer"}],"title":{"id":"5c09c243-9a74-4fa8-ba90-935e19dd235e","type":"Title"},"toolbar":{"id":"7facb266-86fd-43a5-9313-b236e1c100ea","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e860cffe-0457-40cb-9bdf-e3d642fa4c55","type":"FactorRange"},"x_scale":{"id":"da093bd8-8404-47ef-b653-3e86a8ab9514","type":"CategoricalScale"},"y_range":{"id":"225a78b4-e79c-4f57-99ee-b33902eeec40","type":"DataRange1d"},"y_scale":{"id":"d9250530-15c3-4146-880b-dc671287b87a","type":"LinearScale"}},"id":"e0b55eb3-9d9f-41eb-b343-ac069da3173e","subtype":"Figure","type":"Plot"}],"root_ids":["e0b55eb3-9d9f-41eb-b343-ac069da3173e"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"bbb5fb43-bf62-4723-b4b1-0aaf9e9dd8f0","elementid":"6e9d2ebb-8743-4d51-a411-a3320069b132","modelid":"e0b55eb3-9d9f-41eb-b343-ac069da3173e"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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