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
      };var element = document.getElementById("04ec8299-28d7-4e53-bbe4-0b71a726c826");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '04ec8299-28d7-4e53-bbe4-0b71a726c826' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"03e35708-d484-4ac7-ba01-3c5112502388":{"roots":{"references":[{"attributes":{},"id":"08f7b1b8-22d2-43fd-8e00-95c3b20c3042","type":"CategoricalTickFormatter"},{"attributes":{},"id":"ff099c4b-af24-450c-a343-4b189ee9aeb4","type":"LinearScale"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"f4127a61-12b3-49a8-9443-5bd0832bf5f0","type":"GlyphRenderer"}]},"id":"963a69c2-ac3f-43d8-8c14-100bb35a2864","type":"LegendItem"},{"attributes":{"formatter":{"id":"08f7b1b8-22d2-43fd-8e00-95c3b20c3042","type":"CategoricalTickFormatter"},"plot":{"id":"010baa80-90e3-4ab0-8490-320df7781f76","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bdce39f-e2d7-447f-8aff-93e36fb7ac1f","type":"CategoricalTicker"}},"id":"1b4bf19c-b1db-405a-9f92-f2206f9133e1","type":"CategoricalAxis"},{"attributes":{},"id":"e7c01051-b4ef-4f37-81bf-c8a6ab0f215a","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"010baa80-90e3-4ab0-8490-320df7781f76","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7230a31-ac86-4e1e-9dbe-4abdc97f92aa","type":"BasicTicker"}},"id":"959e1bb9-35a9-46df-9ea5-9964f08b3045","type":"Grid"},{"attributes":{},"id":"9bdce39f-e2d7-447f-8aff-93e36fb7ac1f","type":"CategoricalTicker"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"7d6af7a8-ab76-4070-bd9d-1d78de0410af","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"4ead249c-84ed-4002-9d9d-5d838605d99c","type":"VBar"},{"attributes":{},"id":"a7230a31-ac86-4e1e-9dbe-4abdc97f92aa","type":"BasicTicker"},{"attributes":{},"id":"db89e832-cc7c-4fe6-be00-ca467c4044a2","type":"BasicTickFormatter"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"7d6af7a8-ab76-4070-bd9d-1d78de0410af","type":"CategoricalColorMapper"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"b75bfb6f-46cd-4c52-8d30-d0a3a8734009","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9324ff27-a606-4bcd-99cd-08c49b5d87e5","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a99d4016-abad-4f3d-ae31-9ab59095f1e8","type":"PanTool"},{"id":"e7c01051-b4ef-4f37-81bf-c8a6ab0f215a","type":"WheelZoomTool"},{"id":"eee584be-8c5a-4fb1-b1d5-57225db4719d","type":"BoxZoomTool"},{"id":"4cb3836d-e4e8-4c74-aa5b-5b84e0d2496d","type":"SaveTool"},{"id":"79fad89f-d735-453c-a66a-51fbfd8ebe42","type":"ResetTool"},{"id":"0eab67af-c410-4b6d-9a4a-cf2ad9e29cd4","type":"HelpTool"}]},"id":"78b5ee65-4b05-4d1f-9921-77c8cb83d26a","type":"Toolbar"},{"attributes":{},"id":"a99d4016-abad-4f3d-ae31-9ab59095f1e8","type":"PanTool"},{"attributes":{"below":[{"id":"1b4bf19c-b1db-405a-9f92-f2206f9133e1","type":"CategoricalAxis"}],"left":[{"id":"2ee4ee34-b0a2-4409-802a-1d1306834bd7","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1b4bf19c-b1db-405a-9f92-f2206f9133e1","type":"CategoricalAxis"},{"id":"4a4f96fd-0b66-4464-92d1-621614fd4089","type":"Grid"},{"id":"2ee4ee34-b0a2-4409-802a-1d1306834bd7","type":"LinearAxis"},{"id":"959e1bb9-35a9-46df-9ea5-9964f08b3045","type":"Grid"},{"id":"9324ff27-a606-4bcd-99cd-08c49b5d87e5","type":"BoxAnnotation"},{"id":"7f08c72b-d0aa-4190-aa65-85611d494255","type":"Legend"},{"id":"f4127a61-12b3-49a8-9443-5bd0832bf5f0","type":"GlyphRenderer"}],"title":{"id":"b75bfb6f-46cd-4c52-8d30-d0a3a8734009","type":"Title"},"toolbar":{"id":"78b5ee65-4b05-4d1f-9921-77c8cb83d26a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e198d275-e0d5-4d70-9895-b5994fbef75e","type":"FactorRange"},"x_scale":{"id":"1cebe0bd-6bfb-4ee6-b180-93e2d7483fba","type":"CategoricalScale"},"y_range":{"id":"333f8608-0135-42e2-bb92-654906e31b05","type":"DataRange1d"},"y_scale":{"id":"ff099c4b-af24-450c-a343-4b189ee9aeb4","type":"LinearScale"}},"id":"010baa80-90e3-4ab0-8490-320df7781f76","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"bc5c0d28-08ed-4dfb-93d8-6c591e6f1437","type":"ColumnDataSource"},"glyph":{"id":"4ead249c-84ed-4002-9d9d-5d838605d99c","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6289543c-a28a-4316-8ebf-7f5911abe7db","type":"VBar"},"selection_glyph":null,"view":{"id":"0301bc07-cc0b-4f31-9dcf-b96f92978632","type":"CDSView"}},"id":"f4127a61-12b3-49a8-9443-5bd0832bf5f0","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"010baa80-90e3-4ab0-8490-320df7781f76","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bdce39f-e2d7-447f-8aff-93e36fb7ac1f","type":"CategoricalTicker"}},"id":"4a4f96fd-0b66-4464-92d1-621614fd4089","type":"Grid"},{"attributes":{"callback":null,"end":9,"start":0},"id":"333f8608-0135-42e2-bb92-654906e31b05","type":"DataRange1d"},{"attributes":{"overlay":{"id":"9324ff27-a606-4bcd-99cd-08c49b5d87e5","type":"BoxAnnotation"}},"id":"eee584be-8c5a-4fb1-b1d5-57225db4719d","type":"BoxZoomTool"},{"attributes":{},"id":"1cebe0bd-6bfb-4ee6-b180-93e2d7483fba","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"db89e832-cc7c-4fe6-be00-ca467c4044a2","type":"BasicTickFormatter"},"plot":{"id":"010baa80-90e3-4ab0-8490-320df7781f76","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7230a31-ac86-4e1e-9dbe-4abdc97f92aa","type":"BasicTicker"}},"id":"2ee4ee34-b0a2-4409-802a-1d1306834bd7","type":"LinearAxis"},{"attributes":{},"id":"4cb3836d-e4e8-4c74-aa5b-5b84e0d2496d","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"bc5c0d28-08ed-4dfb-93d8-6c591e6f1437","type":"ColumnDataSource"},{"attributes":{},"id":"79fad89f-d735-453c-a66a-51fbfd8ebe42","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"e198d275-e0d5-4d70-9895-b5994fbef75e","type":"FactorRange"},{"attributes":{},"id":"0eab67af-c410-4b6d-9a4a-cf2ad9e29cd4","type":"HelpTool"},{"attributes":{"items":[{"id":"963a69c2-ac3f-43d8-8c14-100bb35a2864","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"010baa80-90e3-4ab0-8490-320df7781f76","subtype":"Figure","type":"Plot"}},"id":"7f08c72b-d0aa-4190-aa65-85611d494255","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"6289543c-a28a-4316-8ebf-7f5911abe7db","type":"VBar"},{"attributes":{"source":{"id":"bc5c0d28-08ed-4dfb-93d8-6c591e6f1437","type":"ColumnDataSource"}},"id":"0301bc07-cc0b-4f31-9dcf-b96f92978632","type":"CDSView"}],"root_ids":["010baa80-90e3-4ab0-8490-320df7781f76"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"03e35708-d484-4ac7-ba01-3c5112502388","elementid":"04ec8299-28d7-4e53-bbe4-0b71a726c826","modelid":"010baa80-90e3-4ab0-8490-320df7781f76"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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