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
      };var element = document.getElementById("f177df9e-09af-4f98-824c-d890e91d1c87");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f177df9e-09af-4f98-824c-d890e91d1c87' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4631aeb9-e131-440d-9cde-82294516119c":{"roots":{"references":[{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"b732dcf7-3645-4e91-82b7-1628d2233066","type":"VBar"},{"attributes":{},"id":"af622155-e25a-4453-a3bb-b542fd41e35c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ef9df2a1-5c96-4c37-9417-864463f76c79","subtype":"Figure","type":"Plot"},"ticker":{"id":"af622155-e25a-4453-a3bb-b542fd41e35c","type":"BasicTicker"}},"id":"becd747e-8edb-4a6e-9acb-4c74d3ff4e79","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"06aef3b4-2ef5-4186-82b8-2083583f9a0b","type":"Toolbar"},{"attributes":{},"id":"1b6b11b9-077e-4675-b15e-1c2ca72571a0","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1b6b11b9-077e-4675-b15e-1c2ca72571a0","type":"BasicTickFormatter"},"plot":{"id":"ef9df2a1-5c96-4c37-9417-864463f76c79","subtype":"Figure","type":"Plot"},"ticker":{"id":"af622155-e25a-4453-a3bb-b542fd41e35c","type":"BasicTicker"}},"id":"1cc5251a-94f4-4478-83c9-d67220f5f508","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"24573de7-2710-4b36-a26a-a9cab1cc4b5f","type":"VBar"},{"attributes":{},"id":"6653f628-b7e3-4b60-8f29-74f0915a1c80","type":"CategoricalScale"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"96a3a93f-b66c-411c-befe-c71655b9af71","type":"GlyphRenderer"}]},"id":"c14e51c4-27e9-4825-abe1-b583a3aa446b","type":"LegendItem"},{"attributes":{},"id":"578a7c6c-8baa-4c22-899d-c29a3e6d41f3","type":"UnionRenderers"},{"attributes":{"callback":null,"end":9},"id":"deb6274c-8f69-4532-b29c-6a5f37a32c51","type":"Range1d"},{"attributes":{"data_source":{"id":"b569d8da-09a9-4109-a291-8d4ba5803797","type":"ColumnDataSource"},"glyph":{"id":"b732dcf7-3645-4e91-82b7-1628d2233066","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24573de7-2710-4b36-a26a-a9cab1cc4b5f","type":"VBar"},"selection_glyph":null,"view":{"id":"8ed58ab0-514a-44a0-a804-1b136a5fac43","type":"CDSView"}},"id":"96a3a93f-b66c-411c-befe-c71655b9af71","type":"GlyphRenderer"},{"attributes":{},"id":"7d04c97a-e852-476a-b884-39ce1547af86","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ef9df2a1-5c96-4c37-9417-864463f76c79","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1aeeca8-f41c-41cb-b91b-370a4d2ed19d","type":"CategoricalTicker"}},"id":"5bb3dac9-e71b-4294-a1fc-eb77b2c7b617","type":"Grid"},{"attributes":{"source":{"id":"b569d8da-09a9-4109-a291-8d4ba5803797","type":"ColumnDataSource"}},"id":"8ed58ab0-514a-44a0-a804-1b136a5fac43","type":"CDSView"},{"attributes":{"formatter":{"id":"215dc07d-51a7-44f0-8059-cfe520ba16d9","type":"CategoricalTickFormatter"},"plot":{"id":"ef9df2a1-5c96-4c37-9417-864463f76c79","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1aeeca8-f41c-41cb-b91b-370a4d2ed19d","type":"CategoricalTicker"}},"id":"45672c06-d95e-49bb-9d16-1fd409ff4f07","type":"CategoricalAxis"},{"attributes":{},"id":"f1aeeca8-f41c-41cb-b91b-370a4d2ed19d","type":"CategoricalTicker"},{"attributes":{},"id":"215dc07d-51a7-44f0-8059-cfe520ba16d9","type":"CategoricalTickFormatter"},{"attributes":{"items":[{"id":"c14e51c4-27e9-4825-abe1-b583a3aa446b","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"ef9df2a1-5c96-4c37-9417-864463f76c79","subtype":"Figure","type":"Plot"}},"id":"bbc8048f-3f38-47ae-9c48-c517d67e7f3b","type":"Legend"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"f7b6a519-d50b-4b60-ab09-7c0f850d0d2c","type":"Selection"},"selection_policy":{"id":"578a7c6c-8baa-4c22-899d-c29a3e6d41f3","type":"UnionRenderers"}},"id":"b569d8da-09a9-4109-a291-8d4ba5803797","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"45672c06-d95e-49bb-9d16-1fd409ff4f07","type":"CategoricalAxis"}],"left":[{"id":"1cc5251a-94f4-4478-83c9-d67220f5f508","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"45672c06-d95e-49bb-9d16-1fd409ff4f07","type":"CategoricalAxis"},{"id":"5bb3dac9-e71b-4294-a1fc-eb77b2c7b617","type":"Grid"},{"id":"1cc5251a-94f4-4478-83c9-d67220f5f508","type":"LinearAxis"},{"id":"becd747e-8edb-4a6e-9acb-4c74d3ff4e79","type":"Grid"},{"id":"bbc8048f-3f38-47ae-9c48-c517d67e7f3b","type":"Legend"},{"id":"96a3a93f-b66c-411c-befe-c71655b9af71","type":"GlyphRenderer"}],"title":{"id":"e1236778-d1af-4786-8dce-9cbb749ee6b8","type":"Title"},"toolbar":{"id":"06aef3b4-2ef5-4186-82b8-2083583f9a0b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8619c2ff-cbbd-45be-be85-dabef4665e6e","type":"FactorRange"},"x_scale":{"id":"6653f628-b7e3-4b60-8f29-74f0915a1c80","type":"CategoricalScale"},"y_range":{"id":"deb6274c-8f69-4532-b29c-6a5f37a32c51","type":"Range1d"},"y_scale":{"id":"7d04c97a-e852-476a-b884-39ce1547af86","type":"LinearScale"}},"id":"ef9df2a1-5c96-4c37-9417-864463f76c79","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"e1236778-d1af-4786-8dce-9cbb749ee6b8","type":"Title"},{"attributes":{},"id":"f7b6a519-d50b-4b60-ab09-7c0f850d0d2c","type":"Selection"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"8619c2ff-cbbd-45be-be85-dabef4665e6e","type":"FactorRange"}],"root_ids":["ef9df2a1-5c96-4c37-9417-864463f76c79"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"4631aeb9-e131-440d-9cde-82294516119c","elementid":"f177df9e-09af-4f98-824c-d890e91d1c87","modelid":"ef9df2a1-5c96-4c37-9417-864463f76c79"}];
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