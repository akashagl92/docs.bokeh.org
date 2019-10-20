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
      };var element = document.getElementById("fd7cd116-ada0-4210-bfa6-f8b5f87c3535");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd7cd116-ada0-4210-bfa6-f8b5f87c3535' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3efd0d9a-279c-4d63-b8f4-f265fa4acb83":{"roots":{"references":[{"attributes":{},"id":"b8ba1442-7378-4a1f-b9ff-ee8650660f1a","type":"BasicTickFormatter"},{"attributes":{},"id":"155cad81-4439-4ee2-a267-575923726037","type":"ResetTool"},{"attributes":{"callback":null},"id":"9e712378-67d3-47a8-b02c-d9ca2415fba3","type":"DataRange1d"},{"attributes":{"plot":{"id":"13a235f0-151f-47ad-b931-f4032e08d4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"c465a521-64a2-4451-b17a-04fa502dab6e","type":"BasicTicker"}},"id":"4eb7c0b9-fd7e-48b2-922a-33e2efe578ae","type":"Grid"},{"attributes":{},"id":"de31a1dd-62b9-47af-beba-89143faee6ef","type":"PanTool"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"5d8ae3c2-7a20-4103-ad56-f11930d6008b","type":"HexTile"},{"attributes":{"data_source":{"id":"d016915a-5662-49e3-9b79-c4136d909d4d","type":"ColumnDataSource"},"glyph":{"id":"5d8ae3c2-7a20-4103-ad56-f11930d6008b","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eec80cd5-79de-4294-a623-87c9b48eca07","type":"HexTile"},"selection_glyph":null,"view":{"id":"00dcd3af-a7da-4751-8d53-4dabaa612bf7","type":"CDSView"}},"id":"9c4b95c7-6828-4f46-9f57-6407c77e8ce3","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"c696cd14-50f2-44bb-aa33-a716050aa44f","type":"BoxAnnotation"}},"id":"69ec3c5b-91e9-42b0-b3f6-932630f08a7c","type":"BoxZoomTool"},{"attributes":{},"id":"bbc3f32e-c2ab-49d0-b020-451bd70a4231","type":"LinearScale"},{"attributes":{"callback":null,"data":{"q":[1,2,2],"r":[0,0,1]},"selected":{"id":"e300e610-7ff1-403c-9a9c-cf44741b614a","type":"Selection"},"selection_policy":{"id":"efe2807b-7c70-4cf8-ba96-7f5632da4abf","type":"UnionRenderers"}},"id":"d016915a-5662-49e3-9b79-c4136d909d4d","type":"ColumnDataSource"},{"attributes":{},"id":"c465a521-64a2-4451-b17a-04fa502dab6e","type":"BasicTicker"},{"attributes":{},"id":"e37daef5-b43d-46a8-a256-a994c10c37d9","type":"SaveTool"},{"attributes":{},"id":"4b170797-e3cb-4562-b474-b96c2a73285e","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"97eedbee-57a7-4d25-afa5-388eb229662f","type":"BasicTickFormatter"},"plot":{"id":"13a235f0-151f-47ad-b931-f4032e08d4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"c465a521-64a2-4451-b17a-04fa502dab6e","type":"BasicTicker"}},"id":"82f80c46-a7e5-420f-abf4-63eb99459337","type":"LinearAxis"},{"attributes":{},"id":"02e799cd-c444-4724-a7b8-055c3ad07d02","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"f6a0a784-28d4-4760-beec-7e667eae261d","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"eec80cd5-79de-4294-a623-87c9b48eca07","type":"HexTile"},{"attributes":{"callback":null},"id":"e88ede07-e894-4dc3-ac6e-ec9b986b6ba2","type":"DataRange1d"},{"attributes":{"source":{"id":"d016915a-5662-49e3-9b79-c4136d909d4d","type":"ColumnDataSource"}},"id":"00dcd3af-a7da-4751-8d53-4dabaa612bf7","type":"CDSView"},{"attributes":{},"id":"efe2807b-7c70-4cf8-ba96-7f5632da4abf","type":"UnionRenderers"},{"attributes":{},"id":"cffd25a9-8315-4618-880d-1e9dbd6168e5","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"13a235f0-151f-47ad-b931-f4032e08d4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"02e799cd-c444-4724-a7b8-055c3ad07d02","type":"BasicTicker"}},"id":"3e4d511b-0704-45c6-9670-f679adb08ed0","type":"Grid"},{"attributes":{},"id":"5a923b19-f4d0-4e8d-9dab-ff00efcbdb2a","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"de31a1dd-62b9-47af-beba-89143faee6ef","type":"PanTool"},{"id":"4b170797-e3cb-4562-b474-b96c2a73285e","type":"WheelZoomTool"},{"id":"69ec3c5b-91e9-42b0-b3f6-932630f08a7c","type":"BoxZoomTool"},{"id":"e37daef5-b43d-46a8-a256-a994c10c37d9","type":"SaveTool"},{"id":"155cad81-4439-4ee2-a267-575923726037","type":"ResetTool"},{"id":"5a923b19-f4d0-4e8d-9dab-ff00efcbdb2a","type":"HelpTool"}]},"id":"084c9fda-1255-4795-9f04-5c7fd97c059a","type":"Toolbar"},{"attributes":{"below":[{"id":"82f80c46-a7e5-420f-abf4-63eb99459337","type":"LinearAxis"}],"left":[{"id":"aa8fbf07-11fe-4eba-9b97-9feedcf0ff0d","type":"LinearAxis"}],"match_aspect":true,"plot_height":300,"plot_width":300,"renderers":[{"id":"82f80c46-a7e5-420f-abf4-63eb99459337","type":"LinearAxis"},{"id":"4eb7c0b9-fd7e-48b2-922a-33e2efe578ae","type":"Grid"},{"id":"aa8fbf07-11fe-4eba-9b97-9feedcf0ff0d","type":"LinearAxis"},{"id":"3e4d511b-0704-45c6-9670-f679adb08ed0","type":"Grid"},{"id":"c696cd14-50f2-44bb-aa33-a716050aa44f","type":"BoxAnnotation"},{"id":"9c4b95c7-6828-4f46-9f57-6407c77e8ce3","type":"GlyphRenderer"}],"title":{"id":"f6a0a784-28d4-4760-beec-7e667eae261d","type":"Title"},"toolbar":{"id":"084c9fda-1255-4795-9f04-5c7fd97c059a","type":"Toolbar"},"x_range":{"id":"9e712378-67d3-47a8-b02c-d9ca2415fba3","type":"DataRange1d"},"x_scale":{"id":"bbc3f32e-c2ab-49d0-b020-451bd70a4231","type":"LinearScale"},"y_range":{"id":"e88ede07-e894-4dc3-ac6e-ec9b986b6ba2","type":"DataRange1d"},"y_scale":{"id":"cffd25a9-8315-4618-880d-1e9dbd6168e5","type":"LinearScale"}},"id":"13a235f0-151f-47ad-b931-f4032e08d4c4","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c696cd14-50f2-44bb-aa33-a716050aa44f","type":"BoxAnnotation"},{"attributes":{},"id":"e300e610-7ff1-403c-9a9c-cf44741b614a","type":"Selection"},{"attributes":{},"id":"97eedbee-57a7-4d25-afa5-388eb229662f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b8ba1442-7378-4a1f-b9ff-ee8650660f1a","type":"BasicTickFormatter"},"plot":{"id":"13a235f0-151f-47ad-b931-f4032e08d4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"02e799cd-c444-4724-a7b8-055c3ad07d02","type":"BasicTicker"}},"id":"aa8fbf07-11fe-4eba-9b97-9feedcf0ff0d","type":"LinearAxis"}],"root_ids":["13a235f0-151f-47ad-b931-f4032e08d4c4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3efd0d9a-279c-4d63-b8f4-f265fa4acb83","roots":{"13a235f0-151f-47ad-b931-f4032e08d4c4":"fd7cd116-ada0-4210-bfa6-f8b5f87c3535"}}];
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