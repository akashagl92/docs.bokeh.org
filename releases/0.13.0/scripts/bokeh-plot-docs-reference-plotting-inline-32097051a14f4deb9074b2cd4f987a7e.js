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
      };var element = document.getElementById("9dce642b-b7cb-44cb-a301-96875e20f7c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9dce642b-b7cb-44cb-a301-96875e20f7c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dc80dbb8-7c1d-4df0-8236-291aff0495c7":{"roots":{"references":[{"attributes":{},"id":"d5202021-2baa-4299-a332-192dc6f81da4","type":"UnionRenderers"},{"attributes":{},"id":"ada6018c-d75b-4060-890e-63771d4a2e57","type":"LinearScale"},{"attributes":{},"id":"170307fe-3c0f-4f3c-af68-ca32612d2eb7","type":"HelpTool"},{"attributes":{},"id":"5eed9547-7b26-451b-ab49-5fdd40a2ad53","type":"LinearScale"},{"attributes":{},"id":"eafc33fa-d571-4c91-a870-b3bc6bd53708","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"26559d71-3a9d-48df-859c-a1c3194ec0ad","type":"BoxAnnotation"}},"id":"0192ad69-bb51-40df-b6b1-4a1b4ee6a266","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b4107374-786b-4176-81d3-3b5d3214b18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"23c6f374-21c8-481d-8d82-2dfe774a333c","type":"BasicTicker"}},"id":"23f76761-426b-44ad-8f40-23d38ef00a50","type":"Grid"},{"attributes":{},"id":"6959fbf1-a5d2-4171-ac2e-c023384431fc","type":"Selection"},{"attributes":{},"id":"2690a31e-699d-4d53-9684-c2cdacbf8028","type":"ResetTool"},{"attributes":{"formatter":{"id":"eafc33fa-d571-4c91-a870-b3bc6bd53708","type":"BasicTickFormatter"},"plot":{"id":"b4107374-786b-4176-81d3-3b5d3214b18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cd25001-460c-4368-890f-ec325aa4219e","type":"BasicTicker"}},"id":"b02dd509-18cd-42f8-b996-01fbda44b0eb","type":"LinearAxis"},{"attributes":{},"id":"ede1ce75-c981-4d44-877b-72110ec1bfe8","type":"SaveTool"},{"attributes":{},"id":"248fa390-9de6-418c-9e27-358a8991e35a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26559d71-3a9d-48df-859c-a1c3194ec0ad","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"d3401057-f507-4998-b872-3abfcb293f83","type":"Title"},{"attributes":{"below":[{"id":"303dd20a-7b30-42be-8b62-9dceca3aaf58","type":"LinearAxis"}],"left":[{"id":"b02dd509-18cd-42f8-b996-01fbda44b0eb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"303dd20a-7b30-42be-8b62-9dceca3aaf58","type":"LinearAxis"},{"id":"23f76761-426b-44ad-8f40-23d38ef00a50","type":"Grid"},{"id":"b02dd509-18cd-42f8-b996-01fbda44b0eb","type":"LinearAxis"},{"id":"0df279d0-2b0e-4c6e-9ac8-a59a632f4550","type":"Grid"},{"id":"26559d71-3a9d-48df-859c-a1c3194ec0ad","type":"BoxAnnotation"},{"id":"bf14e6e3-53ce-4a08-a0c7-facef6333e96","type":"GlyphRenderer"}],"title":{"id":"d3401057-f507-4998-b872-3abfcb293f83","type":"Title"},"toolbar":{"id":"2a212985-72d2-4841-a71e-5f4dc8b6358b","type":"Toolbar"},"x_range":{"id":"36aa2117-7208-4cb9-8233-fba9166963df","type":"DataRange1d"},"x_scale":{"id":"ada6018c-d75b-4060-890e-63771d4a2e57","type":"LinearScale"},"y_range":{"id":"c5455758-9c9c-4f88-9d35-e44a480ec636","type":"DataRange1d"},"y_scale":{"id":"5eed9547-7b26-451b-ab49-5fdd40a2ad53","type":"LinearScale"}},"id":"b4107374-786b-4176-81d3-3b5d3214b18e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3cd25001-460c-4368-890f-ec325aa4219e","type":"BasicTicker"},{"attributes":{},"id":"80c83d2a-d06e-4635-9b58-618fbce0fcc7","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"80c83d2a-d06e-4635-9b58-618fbce0fcc7","type":"PanTool"},{"id":"02e97b16-fe92-4a22-ab46-b452b4d1cc22","type":"WheelZoomTool"},{"id":"0192ad69-bb51-40df-b6b1-4a1b4ee6a266","type":"BoxZoomTool"},{"id":"ede1ce75-c981-4d44-877b-72110ec1bfe8","type":"SaveTool"},{"id":"2690a31e-699d-4d53-9684-c2cdacbf8028","type":"ResetTool"},{"id":"170307fe-3c0f-4f3c-af68-ca32612d2eb7","type":"HelpTool"}]},"id":"2a212985-72d2-4841-a71e-5f4dc8b6358b","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74a82aa2-3b87-4164-ab42-47c32ed585de","type":"SquareCross"},{"attributes":{"callback":null},"id":"36aa2117-7208-4cb9-8233-fba9166963df","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"b4107374-786b-4176-81d3-3b5d3214b18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cd25001-460c-4368-890f-ec325aa4219e","type":"BasicTicker"}},"id":"0df279d0-2b0e-4c6e-9ac8-a59a632f4550","type":"Grid"},{"attributes":{"source":{"id":"6aca8640-b0b6-4718-8d36-a6e6825c1e4e","type":"ColumnDataSource"}},"id":"81f9ddf9-6672-42cb-a449-b74828649c87","type":"CDSView"},{"attributes":{},"id":"23c6f374-21c8-481d-8d82-2dfe774a333c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e988eace-e399-44f8-9fd5-e3fcba3f8073","type":"SquareCross"},{"attributes":{"data_source":{"id":"6aca8640-b0b6-4718-8d36-a6e6825c1e4e","type":"ColumnDataSource"},"glyph":{"id":"74a82aa2-3b87-4164-ab42-47c32ed585de","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e988eace-e399-44f8-9fd5-e3fcba3f8073","type":"SquareCross"},"selection_glyph":null,"view":{"id":"81f9ddf9-6672-42cb-a449-b74828649c87","type":"CDSView"}},"id":"bf14e6e3-53ce-4a08-a0c7-facef6333e96","type":"GlyphRenderer"},{"attributes":{},"id":"02e97b16-fe92-4a22-ab46-b452b4d1cc22","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"248fa390-9de6-418c-9e27-358a8991e35a","type":"BasicTickFormatter"},"plot":{"id":"b4107374-786b-4176-81d3-3b5d3214b18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"23c6f374-21c8-481d-8d82-2dfe774a333c","type":"BasicTicker"}},"id":"303dd20a-7b30-42be-8b62-9dceca3aaf58","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"6959fbf1-a5d2-4171-ac2e-c023384431fc","type":"Selection"},"selection_policy":{"id":"d5202021-2baa-4299-a332-192dc6f81da4","type":"UnionRenderers"}},"id":"6aca8640-b0b6-4718-8d36-a6e6825c1e4e","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c5455758-9c9c-4f88-9d35-e44a480ec636","type":"DataRange1d"}],"root_ids":["b4107374-786b-4176-81d3-3b5d3214b18e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"dc80dbb8-7c1d-4df0-8236-291aff0495c7","roots":{"b4107374-786b-4176-81d3-3b5d3214b18e":"9dce642b-b7cb-44cb-a301-96875e20f7c3"}}];
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