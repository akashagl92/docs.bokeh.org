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
      };var element = document.getElementById("a11dafbc-4276-4620-a03a-527e915ab3fa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a11dafbc-4276-4620-a03a-527e915ab3fa' but no matching script tag was found. ")
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
                    var docs_json = {"054a5182-71d6-43de-ac77-20f69e547175":{"roots":{"references":[{"attributes":{},"id":"1b6f6503-722e-4ffc-bbb1-57c988d33b23","type":"WheelZoomTool"},{"attributes":{},"id":"f19506ba-bf54-4d2e-9954-cc0bc18af00a","type":"BasicTicker"},{"attributes":{"overlay":{"id":"66254831-ca5f-470d-9942-838fd3338029","type":"BoxAnnotation"}},"id":"25821f78-fc11-4cfa-97f9-56821c088fb4","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c9531afc-e7c9-43a0-8d01-836a94fbf0df","type":"SquareCross"},{"attributes":{},"id":"fed1aaca-7a0d-4c2d-b4d2-2c519eff995f","type":"SaveTool"},{"attributes":{"formatter":{"id":"a7a41e25-1a07-4d76-8473-d31441f52881","type":"BasicTickFormatter"},"plot":{"id":"9cdd304e-3ba4-4e00-9c83-a3808f21012a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f19506ba-bf54-4d2e-9954-cc0bc18af00a","type":"BasicTicker"}},"id":"fa73404e-b803-468f-a9bf-6de7527ac74c","type":"LinearAxis"},{"attributes":{},"id":"775a99d0-edf3-4601-ab0b-cbde429c75b5","type":"ResetTool"},{"attributes":{"callback":null},"id":"a3c569c2-a5c5-4900-894d-bb25fbfe6eb4","type":"DataRange1d"},{"attributes":{},"id":"30113416-7db0-45fd-890c-158f5a9d9283","type":"HelpTool"},{"attributes":{},"id":"2c955fdd-0932-4b40-935e-37e97f566067","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"5dcf2923-2800-4138-8b92-117a35878592","type":"Title"},{"attributes":{},"id":"9fcc023c-0c38-4db6-9e35-111f099072ea","type":"LinearScale"},{"attributes":{"source":{"id":"ad86dddf-3e71-4040-9374-6280e488317f","type":"ColumnDataSource"}},"id":"62763316-b7da-4e9f-9592-d83707195cc0","type":"CDSView"},{"attributes":{"plot":{"id":"9cdd304e-3ba4-4e00-9c83-a3808f21012a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f19506ba-bf54-4d2e-9954-cc0bc18af00a","type":"BasicTicker"}},"id":"bc031ad6-7a7a-4479-bc2f-0a2376e5eb1f","type":"Grid"},{"attributes":{"formatter":{"id":"45c872a2-46c7-470a-92f7-376e4d73cee4","type":"BasicTickFormatter"},"plot":{"id":"9cdd304e-3ba4-4e00-9c83-a3808f21012a","subtype":"Figure","type":"Plot"},"ticker":{"id":"eab22569-d489-481b-8c02-78d42092049d","type":"BasicTicker"}},"id":"a32ead95-f896-4575-a1be-c7dbfd42238b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"94104907-1e11-45de-874a-a06cb061edf4","type":"SquareCross"},{"attributes":{},"id":"eab22569-d489-481b-8c02-78d42092049d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"9cdd304e-3ba4-4e00-9c83-a3808f21012a","subtype":"Figure","type":"Plot"},"ticker":{"id":"eab22569-d489-481b-8c02-78d42092049d","type":"BasicTicker"}},"id":"6ad0d473-c02b-4d21-9bb2-6d0887aa3fdb","type":"Grid"},{"attributes":{},"id":"45c872a2-46c7-470a-92f7-376e4d73cee4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ad86dddf-3e71-4040-9374-6280e488317f","type":"ColumnDataSource"},"glyph":{"id":"c9531afc-e7c9-43a0-8d01-836a94fbf0df","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94104907-1e11-45de-874a-a06cb061edf4","type":"SquareCross"},"selection_glyph":null,"view":{"id":"62763316-b7da-4e9f-9592-d83707195cc0","type":"CDSView"}},"id":"21068f8d-19d7-4842-8367-58f861a75040","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"ad86dddf-3e71-4040-9374-6280e488317f","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"66254831-ca5f-470d-9942-838fd3338029","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"fa73404e-b803-468f-a9bf-6de7527ac74c","type":"LinearAxis"}],"left":[{"id":"a32ead95-f896-4575-a1be-c7dbfd42238b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fa73404e-b803-468f-a9bf-6de7527ac74c","type":"LinearAxis"},{"id":"bc031ad6-7a7a-4479-bc2f-0a2376e5eb1f","type":"Grid"},{"id":"a32ead95-f896-4575-a1be-c7dbfd42238b","type":"LinearAxis"},{"id":"6ad0d473-c02b-4d21-9bb2-6d0887aa3fdb","type":"Grid"},{"id":"66254831-ca5f-470d-9942-838fd3338029","type":"BoxAnnotation"},{"id":"21068f8d-19d7-4842-8367-58f861a75040","type":"GlyphRenderer"}],"title":{"id":"5dcf2923-2800-4138-8b92-117a35878592","type":"Title"},"toolbar":{"id":"14cd704d-76ae-4a82-be21-5eec38b42224","type":"Toolbar"},"x_range":{"id":"05e5cc11-a071-4d4f-9eae-e5d45feac503","type":"DataRange1d"},"x_scale":{"id":"2c955fdd-0932-4b40-935e-37e97f566067","type":"LinearScale"},"y_range":{"id":"a3c569c2-a5c5-4900-894d-bb25fbfe6eb4","type":"DataRange1d"},"y_scale":{"id":"9fcc023c-0c38-4db6-9e35-111f099072ea","type":"LinearScale"}},"id":"9cdd304e-3ba4-4e00-9c83-a3808f21012a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f9f90ee4-f8fd-4f18-8c99-6ba668f2fe9b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f9f90ee4-f8fd-4f18-8c99-6ba668f2fe9b","type":"PanTool"},{"id":"1b6f6503-722e-4ffc-bbb1-57c988d33b23","type":"WheelZoomTool"},{"id":"25821f78-fc11-4cfa-97f9-56821c088fb4","type":"BoxZoomTool"},{"id":"fed1aaca-7a0d-4c2d-b4d2-2c519eff995f","type":"SaveTool"},{"id":"775a99d0-edf3-4601-ab0b-cbde429c75b5","type":"ResetTool"},{"id":"30113416-7db0-45fd-890c-158f5a9d9283","type":"HelpTool"}]},"id":"14cd704d-76ae-4a82-be21-5eec38b42224","type":"Toolbar"},{"attributes":{},"id":"a7a41e25-1a07-4d76-8473-d31441f52881","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"05e5cc11-a071-4d4f-9eae-e5d45feac503","type":"DataRange1d"}],"root_ids":["9cdd304e-3ba4-4e00-9c83-a3808f21012a"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"054a5182-71d6-43de-ac77-20f69e547175","elementid":"a11dafbc-4276-4620-a03a-527e915ab3fa","modelid":"9cdd304e-3ba4-4e00-9c83-a3808f21012a"}];
                
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
