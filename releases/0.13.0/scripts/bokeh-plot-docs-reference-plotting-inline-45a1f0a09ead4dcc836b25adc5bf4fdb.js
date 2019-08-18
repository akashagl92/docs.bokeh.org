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
      };var element = document.getElementById("9f6cbf68-956f-4918-b989-b4cfa5711c46");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f6cbf68-956f-4918-b989-b4cfa5711c46' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d5ad1e32-cdda-46e1-ae8c-5a1a78c1fedc":{"roots":{"references":[{"attributes":{"overlay":{"id":"26ec43b6-5e58-4a1f-8ac5-a3a4b3327806","type":"BoxAnnotation"}},"id":"60cebe58-f7d9-4179-8523-dd0968471e5b","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"a8bd4af3-a374-41aa-aed2-ffa3a3a12b9c","type":"BasicTickFormatter"},"plot":{"id":"22ab0aa6-2a71-473d-9717-7ff8147f5d1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fd206fe-0f49-4832-b5e3-127809919113","type":"BasicTicker"}},"id":"c623afaf-9518-4f59-9de6-63b9c7c380da","type":"LinearAxis"},{"attributes":{},"id":"8fd206fe-0f49-4832-b5e3-127809919113","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"22ab0aa6-2a71-473d-9717-7ff8147f5d1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fd206fe-0f49-4832-b5e3-127809919113","type":"BasicTicker"}},"id":"d93640ce-daa6-4f91-93a4-4c87c63f3ee1","type":"Grid"},{"attributes":{},"id":"a7341e5a-4c25-4699-8263-e698721b3b3f","type":"UnionRenderers"},{"attributes":{},"id":"a8bd4af3-a374-41aa-aed2-ffa3a3a12b9c","type":"BasicTickFormatter"},{"attributes":{},"id":"12a820d7-9799-4332-ad66-956496179488","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"3da7aa5a-8f00-4a26-af9c-ffe73718334b","type":"Selection"},"selection_policy":{"id":"a7341e5a-4c25-4699-8263-e698721b3b3f","type":"UnionRenderers"}},"id":"900a0f79-cc4a-4982-9ce9-4930786ac184","type":"ColumnDataSource"},{"attributes":{},"id":"3da7aa5a-8f00-4a26-af9c-ffe73718334b","type":"Selection"},{"attributes":{},"id":"118bd4f3-7620-4f92-bf17-8036885f8bff","type":"PanTool"},{"attributes":{"below":[{"id":"c506222e-14e3-462c-93d5-150cb65ad296","type":"LinearAxis"}],"left":[{"id":"c623afaf-9518-4f59-9de6-63b9c7c380da","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c506222e-14e3-462c-93d5-150cb65ad296","type":"LinearAxis"},{"id":"65f48534-93b7-4063-b2a2-484acffbe761","type":"Grid"},{"id":"c623afaf-9518-4f59-9de6-63b9c7c380da","type":"LinearAxis"},{"id":"d93640ce-daa6-4f91-93a4-4c87c63f3ee1","type":"Grid"},{"id":"26ec43b6-5e58-4a1f-8ac5-a3a4b3327806","type":"BoxAnnotation"},{"id":"78a2099f-2390-43ca-b7c8-488f02058837","type":"GlyphRenderer"}],"title":{"id":"806b4dc4-69b6-43c1-8dbf-52effddbafe5","type":"Title"},"toolbar":{"id":"f336e947-7161-4cbb-a229-41ad16c4f91f","type":"Toolbar"},"x_range":{"id":"005cadc4-2a0a-400e-9e97-9712db0b1aff","type":"DataRange1d"},"x_scale":{"id":"2a4e3377-c407-4364-95ef-aa80154a14f6","type":"LinearScale"},"y_range":{"id":"fad5e49a-8b6d-4264-9bbc-06b99be479f7","type":"DataRange1d"},"y_scale":{"id":"1d2da438-c327-46d2-835a-3fa88c6a8efa","type":"LinearScale"}},"id":"22ab0aa6-2a71-473d-9717-7ff8147f5d1c","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"900a0f79-cc4a-4982-9ce9-4930786ac184","type":"ColumnDataSource"}},"id":"4a4a18eb-5794-4b74-8aa1-0fdcb2a20848","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118bd4f3-7620-4f92-bf17-8036885f8bff","type":"PanTool"},{"id":"fbce45a8-b3ae-4ca3-8e5d-8b430eb98114","type":"WheelZoomTool"},{"id":"60cebe58-f7d9-4179-8523-dd0968471e5b","type":"BoxZoomTool"},{"id":"e814704b-e72c-4bbb-bb3d-47a7398f4c27","type":"SaveTool"},{"id":"bfdb24f7-ff05-401f-b44e-aa67d99d7545","type":"ResetTool"},{"id":"2f532c10-efff-4528-8e95-fad80c7a96e3","type":"HelpTool"}]},"id":"f336e947-7161-4cbb-a229-41ad16c4f91f","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac804cd9-c36d-4a19-8dc5-44bdb72c35c3","type":"Triangle"},{"attributes":{},"id":"fbce45a8-b3ae-4ca3-8e5d-8b430eb98114","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"005cadc4-2a0a-400e-9e97-9712db0b1aff","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"da9088c6-7fab-413f-8291-6525d0a22dcd","type":"Triangle"},{"attributes":{"formatter":{"id":"12a820d7-9799-4332-ad66-956496179488","type":"BasicTickFormatter"},"plot":{"id":"22ab0aa6-2a71-473d-9717-7ff8147f5d1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"45de08cf-1c99-4564-8cb7-bd9d271d9569","type":"BasicTicker"}},"id":"c506222e-14e3-462c-93d5-150cb65ad296","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"806b4dc4-69b6-43c1-8dbf-52effddbafe5","type":"Title"},{"attributes":{"plot":{"id":"22ab0aa6-2a71-473d-9717-7ff8147f5d1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"45de08cf-1c99-4564-8cb7-bd9d271d9569","type":"BasicTicker"}},"id":"65f48534-93b7-4063-b2a2-484acffbe761","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26ec43b6-5e58-4a1f-8ac5-a3a4b3327806","type":"BoxAnnotation"},{"attributes":{},"id":"45de08cf-1c99-4564-8cb7-bd9d271d9569","type":"BasicTicker"},{"attributes":{},"id":"2f532c10-efff-4528-8e95-fad80c7a96e3","type":"HelpTool"},{"attributes":{"callback":null},"id":"fad5e49a-8b6d-4264-9bbc-06b99be479f7","type":"DataRange1d"},{"attributes":{},"id":"bfdb24f7-ff05-401f-b44e-aa67d99d7545","type":"ResetTool"},{"attributes":{},"id":"2a4e3377-c407-4364-95ef-aa80154a14f6","type":"LinearScale"},{"attributes":{},"id":"e814704b-e72c-4bbb-bb3d-47a7398f4c27","type":"SaveTool"},{"attributes":{},"id":"1d2da438-c327-46d2-835a-3fa88c6a8efa","type":"LinearScale"},{"attributes":{"data_source":{"id":"900a0f79-cc4a-4982-9ce9-4930786ac184","type":"ColumnDataSource"},"glyph":{"id":"da9088c6-7fab-413f-8291-6525d0a22dcd","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ac804cd9-c36d-4a19-8dc5-44bdb72c35c3","type":"Triangle"},"selection_glyph":null,"view":{"id":"4a4a18eb-5794-4b74-8aa1-0fdcb2a20848","type":"CDSView"}},"id":"78a2099f-2390-43ca-b7c8-488f02058837","type":"GlyphRenderer"}],"root_ids":["22ab0aa6-2a71-473d-9717-7ff8147f5d1c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d5ad1e32-cdda-46e1-ae8c-5a1a78c1fedc","roots":{"22ab0aa6-2a71-473d-9717-7ff8147f5d1c":"9f6cbf68-956f-4918-b989-b4cfa5711c46"}}];
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