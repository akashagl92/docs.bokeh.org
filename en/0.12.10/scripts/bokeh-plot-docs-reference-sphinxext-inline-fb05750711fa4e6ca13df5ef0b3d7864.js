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
      };var element = document.getElementById("5686269e-00c1-4567-a7cc-ca1440244a4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5686269e-00c1-4567-a7cc-ca1440244a4b' but no matching script tag was found. ")
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
                    var docs_json = {"e1430300-d8b1-4fff-a046-6a57eddbaea6":{"roots":{"references":[{"attributes":{},"id":"83de1cbd-58cd-465f-945b-c36cdcdf7385","type":"SaveTool"},{"attributes":{},"id":"edf17c7c-55c8-493a-8699-874059f748e7","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6f77ce3-4cc6-49b2-bdd0-769b108e9f39","type":"PanTool"},{"id":"1f6442fe-5764-47fc-bda5-d427a2a79699","type":"WheelZoomTool"},{"id":"303f4a72-7340-49e9-a43c-cd7faf8530d9","type":"BoxZoomTool"},{"id":"83de1cbd-58cd-465f-945b-c36cdcdf7385","type":"SaveTool"},{"id":"cb36efde-409e-40c1-acd8-fe858f5b9035","type":"ResetTool"},{"id":"edf17c7c-55c8-493a-8699-874059f748e7","type":"HelpTool"}]},"id":"1332c9e5-c75f-4522-856c-3aa2e25d6193","type":"Toolbar"},{"attributes":{"data_source":{"id":"01b231ba-5fc6-4c3e-888e-ef953b07d197","type":"ColumnDataSource"},"glyph":{"id":"e239b919-668b-48f8-a826-1530f2a137d4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"285a5109-4838-456d-a7a8-b469a7740e9c","type":"Line"},"selection_glyph":null,"view":{"id":"099f8fc0-99c5-42cb-81ca-c0aa57a78060","type":"CDSView"}},"id":"365dc9ab-f079-4a30-9186-b7eb87965533","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"aabdf403-c04f-4e36-99aa-da22ce6bb1c6","type":"BoxAnnotation"}},"id":"303f4a72-7340-49e9-a43c-cd7faf8530d9","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"e8d2a522-44bb-41d1-b699-f404ebc18574","subtype":"Figure","type":"Plot"},"ticker":{"id":"7de35ded-9780-4a53-b3eb-21882461e90b","type":"BasicTicker"}},"id":"b13df62c-4006-4f0b-a0d8-42b202ebfcea","type":"Grid"},{"attributes":{},"id":"6fad9c83-3f7f-4e55-8974-6499b8554291","type":"LinearScale"},{"attributes":{},"id":"cb36efde-409e-40c1-acd8-fe858f5b9035","type":"ResetTool"},{"attributes":{"source":{"id":"13ad5e79-d81f-4792-b979-e26c3941add0","type":"ColumnDataSource"}},"id":"69702912-dce7-4805-b184-c4d58d6388bd","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aabdf403-c04f-4e36-99aa-da22ce6bb1c6","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"example"},"id":"b91ff870-0045-4e18-879c-a3bbe408102e","type":"Title"},{"attributes":{},"id":"4b123264-931d-4904-9c6c-637715757f4b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9cb1a9f1-4eac-4980-81fb-225a36e58035","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"285a5109-4838-456d-a7a8-b469a7740e9c","type":"Line"},{"attributes":{},"id":"7de35ded-9780-4a53-b3eb-21882461e90b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"67f5b3b6-59e0-49bb-a703-150e8574b58a","type":"BasicTickFormatter"},"plot":{"id":"e8d2a522-44bb-41d1-b699-f404ebc18574","subtype":"Figure","type":"Plot"},"ticker":{"id":"7de35ded-9780-4a53-b3eb-21882461e90b","type":"BasicTicker"}},"id":"d376d7bc-976c-4297-b50d-91fa8ec9d79d","type":"LinearAxis"},{"attributes":{"source":{"id":"01b231ba-5fc6-4c3e-888e-ef953b07d197","type":"ColumnDataSource"}},"id":"099f8fc0-99c5-42cb-81ca-c0aa57a78060","type":"CDSView"},{"attributes":{"below":[{"id":"4ebc1158-f0db-4ec9-91a7-98277a2b0ba4","type":"LinearAxis"}],"left":[{"id":"d376d7bc-976c-4297-b50d-91fa8ec9d79d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4ebc1158-f0db-4ec9-91a7-98277a2b0ba4","type":"LinearAxis"},{"id":"ed569f3d-b00a-4486-9d5b-527a9acaaf46","type":"Grid"},{"id":"d376d7bc-976c-4297-b50d-91fa8ec9d79d","type":"LinearAxis"},{"id":"b13df62c-4006-4f0b-a0d8-42b202ebfcea","type":"Grid"},{"id":"aabdf403-c04f-4e36-99aa-da22ce6bb1c6","type":"BoxAnnotation"},{"id":"365dc9ab-f079-4a30-9186-b7eb87965533","type":"GlyphRenderer"},{"id":"ad558a6e-d3f8-4038-8a56-713149a50a23","type":"GlyphRenderer"}],"title":{"id":"b91ff870-0045-4e18-879c-a3bbe408102e","type":"Title"},"toolbar":{"id":"1332c9e5-c75f-4522-856c-3aa2e25d6193","type":"Toolbar"},"x_range":{"id":"9cb1a9f1-4eac-4980-81fb-225a36e58035","type":"DataRange1d"},"x_scale":{"id":"6fad9c83-3f7f-4e55-8974-6499b8554291","type":"LinearScale"},"y_range":{"id":"b66edd78-8fed-4a1b-bd42-1b3a30be6b3b","type":"DataRange1d"},"y_scale":{"id":"0041b859-1499-40a6-89c8-537b41705304","type":"LinearScale"}},"id":"e8d2a522-44bb-41d1-b699-f404ebc18574","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1f6442fe-5764-47fc-bda5-d427a2a79699","type":"WheelZoomTool"},{"attributes":{},"id":"0041b859-1499-40a6-89c8-537b41705304","type":"LinearScale"},{"attributes":{},"id":"67f5b3b6-59e0-49bb-a703-150e8574b58a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"13ad5e79-d81f-4792-b979-e26c3941add0","type":"ColumnDataSource"},{"attributes":{},"id":"d6f77ce3-4cc6-49b2-bdd0-769b108e9f39","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"01b231ba-5fc6-4c3e-888e-ef953b07d197","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"da722d31-962b-4d31-9b73-f242869ce757","type":"BasicTickFormatter"},"plot":{"id":"e8d2a522-44bb-41d1-b699-f404ebc18574","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b123264-931d-4904-9c6c-637715757f4b","type":"BasicTicker"}},"id":"4ebc1158-f0db-4ec9-91a7-98277a2b0ba4","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7405898d-5657-48c2-9291-9c5c5ecd3d02","type":"Circle"},{"attributes":{"plot":{"id":"e8d2a522-44bb-41d1-b699-f404ebc18574","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b123264-931d-4904-9c6c-637715757f4b","type":"BasicTicker"}},"id":"ed569f3d-b00a-4486-9d5b-527a9acaaf46","type":"Grid"},{"attributes":{},"id":"da722d31-962b-4d31-9b73-f242869ce757","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b66edd78-8fed-4a1b-bd42-1b3a30be6b3b","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a63e8f3-5179-4de9-bcae-804f50a4d6fd","type":"Circle"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e239b919-668b-48f8-a826-1530f2a137d4","type":"Line"},{"attributes":{"data_source":{"id":"13ad5e79-d81f-4792-b979-e26c3941add0","type":"ColumnDataSource"},"glyph":{"id":"1a63e8f3-5179-4de9-bcae-804f50a4d6fd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7405898d-5657-48c2-9291-9c5c5ecd3d02","type":"Circle"},"selection_glyph":null,"view":{"id":"69702912-dce7-4805-b184-c4d58d6388bd","type":"CDSView"}},"id":"ad558a6e-d3f8-4038-8a56-713149a50a23","type":"GlyphRenderer"}],"root_ids":["e8d2a522-44bb-41d1-b699-f404ebc18574"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e1430300-d8b1-4fff-a046-6a57eddbaea6","elementid":"5686269e-00c1-4567-a7cc-ca1440244a4b","modelid":"e8d2a522-44bb-41d1-b699-f404ebc18574"}];
                
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
