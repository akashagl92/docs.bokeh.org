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
      };var element = document.getElementById("ee301798-01af-48a4-b2d9-c40de6f1e9cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee301798-01af-48a4-b2d9-c40de6f1e9cf' but no matching script tag was found. ")
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
                    var docs_json = {"a068f023-0c8c-49cd-9a10-47199b9c0ee4":{"roots":{"references":[{"attributes":{"ticks":[2,3.5,4]},"id":"bf9063d4-ba45-45ab-8fbe-4cb5f8f4d9e9","type":"FixedTicker"},{"attributes":{},"id":"c92b8ce3-a5b2-49b0-bf4c-d2012b7b1ad7","type":"LinearScale"},{"attributes":{"formatter":{"id":"b5283140-d7de-4609-9d35-73e368bd6c79","type":"BasicTickFormatter"},"plot":{"id":"3bbdf8ef-d12b-4415-a7bb-bab514fb396f","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf9063d4-ba45-45ab-8fbe-4cb5f8f4d9e9","type":"FixedTicker"}},"id":"bf53c645-aeda-4559-a30b-80e9176300cc","type":"LinearAxis"},{"attributes":{"source":{"id":"842acc34-1329-4a7b-ac68-96dd264a3ce5","type":"ColumnDataSource"}},"id":"84638417-10a3-4a92-b16d-223192ec345e","type":"CDSView"},{"attributes":{"plot":{"id":"3bbdf8ef-d12b-4415-a7bb-bab514fb396f","subtype":"Figure","type":"Plot"},"ticker":{"id":"de2e5ae9-9da8-4684-a921-1f942074eef1","type":"BasicTicker"}},"id":"70c724d3-2d0b-4fe6-8f00-93ce7482236a","type":"Grid"},{"attributes":{},"id":"47a6eb70-048f-48a5-8904-d10da0905751","type":"PanTool"},{"attributes":{},"id":"de2e5ae9-9da8-4684-a921-1f942074eef1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e3631172-7c8c-4ea9-94de-aa7000b9178c","type":"BasicTickFormatter"},"plot":{"id":"3bbdf8ef-d12b-4415-a7bb-bab514fb396f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f9fd60c-0091-4f1c-b658-b18b3abf7c87","type":"BasicTicker"}},"id":"35959494-2a00-42b7-b7b8-086286f98b2a","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca71d2a0-5d23-4dde-8949-40a0f913fc8f","type":"Circle"},{"attributes":{},"id":"3dc9d027-acd6-44e8-a576-17762bf49e84","type":"ResetTool"},{"attributes":{"callback":null},"id":"cd873a64-f299-4782-9bc1-9796e261236c","type":"DataRange1d"},{"attributes":{"below":[{"id":"bf53c645-aeda-4559-a30b-80e9176300cc","type":"LinearAxis"}],"left":[{"id":"35959494-2a00-42b7-b7b8-086286f98b2a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bf53c645-aeda-4559-a30b-80e9176300cc","type":"LinearAxis"},{"id":"70c724d3-2d0b-4fe6-8f00-93ce7482236a","type":"Grid"},{"id":"35959494-2a00-42b7-b7b8-086286f98b2a","type":"LinearAxis"},{"id":"2b8f00d4-a18e-4130-80df-4cdae2e2e630","type":"Grid"},{"id":"ae33cb28-3451-4082-8f36-d155f700f8e7","type":"BoxAnnotation"},{"id":"49b758e2-42a9-4c5d-afcb-ea1c885d2dfd","type":"GlyphRenderer"}],"title":{"id":"9e31d8b0-a70f-4333-9e03-4128d8c95aef","type":"Title"},"toolbar":{"id":"2653ae0c-f486-49aa-a848-9580458cd278","type":"Toolbar"},"x_range":{"id":"cd873a64-f299-4782-9bc1-9796e261236c","type":"DataRange1d"},"x_scale":{"id":"22000645-cb5c-4e27-bfe9-80cc20aea56d","type":"LinearScale"},"y_range":{"id":"b9e11496-5d31-4e62-9b5f-8de2ce8dc6f2","type":"DataRange1d"},"y_scale":{"id":"c92b8ce3-a5b2-49b0-bf4c-d2012b7b1ad7","type":"LinearScale"}},"id":"3bbdf8ef-d12b-4415-a7bb-bab514fb396f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4f9fd60c-0091-4f1c-b658-b18b3abf7c87","type":"BasicTicker"},{"attributes":{},"id":"7a3d665d-93ce-4b6d-b8b2-8cd1aaf2ff3b","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"b9e11496-5d31-4e62-9b5f-8de2ce8dc6f2","type":"DataRange1d"},{"attributes":{},"id":"f4b5dccf-aece-4fe1-8f13-746b68415c63","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ae33cb28-3451-4082-8f36-d155f700f8e7","type":"BoxAnnotation"},{"attributes":{},"id":"22000645-cb5c-4e27-bfe9-80cc20aea56d","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"9e31d8b0-a70f-4333-9e03-4128d8c95aef","type":"Title"},{"attributes":{},"id":"e3631172-7c8c-4ea9-94de-aa7000b9178c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c120709-e3da-496a-a206-cbf1e9ff6081","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"3bbdf8ef-d12b-4415-a7bb-bab514fb396f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f9fd60c-0091-4f1c-b658-b18b3abf7c87","type":"BasicTicker"}},"id":"2b8f00d4-a18e-4130-80df-4cdae2e2e630","type":"Grid"},{"attributes":{},"id":"b5283140-d7de-4609-9d35-73e368bd6c79","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"47a6eb70-048f-48a5-8904-d10da0905751","type":"PanTool"},{"id":"7a3d665d-93ce-4b6d-b8b2-8cd1aaf2ff3b","type":"WheelZoomTool"},{"id":"5bd40d1f-22dd-4455-a5b3-e1952c089f27","type":"BoxZoomTool"},{"id":"2f67eaca-35ca-454f-802e-84f4fa43b855","type":"SaveTool"},{"id":"3dc9d027-acd6-44e8-a576-17762bf49e84","type":"ResetTool"},{"id":"f4b5dccf-aece-4fe1-8f13-746b68415c63","type":"HelpTool"}]},"id":"2653ae0c-f486-49aa-a848-9580458cd278","type":"Toolbar"},{"attributes":{},"id":"2f67eaca-35ca-454f-802e-84f4fa43b855","type":"SaveTool"},{"attributes":{"overlay":{"id":"ae33cb28-3451-4082-8f36-d155f700f8e7","type":"BoxAnnotation"}},"id":"5bd40d1f-22dd-4455-a5b3-e1952c089f27","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"842acc34-1329-4a7b-ac68-96dd264a3ce5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"842acc34-1329-4a7b-ac68-96dd264a3ce5","type":"ColumnDataSource"},"glyph":{"id":"5c120709-e3da-496a-a206-cbf1e9ff6081","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ca71d2a0-5d23-4dde-8949-40a0f913fc8f","type":"Circle"},"selection_glyph":null,"view":{"id":"84638417-10a3-4a92-b16d-223192ec345e","type":"CDSView"}},"id":"49b758e2-42a9-4c5d-afcb-ea1c885d2dfd","type":"GlyphRenderer"}],"root_ids":["3bbdf8ef-d12b-4415-a7bb-bab514fb396f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a068f023-0c8c-49cd-9a10-47199b9c0ee4","elementid":"ee301798-01af-48a4-b2d9-c40de6f1e9cf","modelid":"3bbdf8ef-d12b-4415-a7bb-bab514fb396f"}];
                
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
