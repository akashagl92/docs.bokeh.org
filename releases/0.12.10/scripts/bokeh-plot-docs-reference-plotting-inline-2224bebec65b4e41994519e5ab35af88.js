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
      };var element = document.getElementById("04cb7052-f6fa-4984-96c8-84a34a43e4c9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '04cb7052-f6fa-4984-96c8-84a34a43e4c9' but no matching script tag was found. ")
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
                    var docs_json = {"a35f4e5a-1732-4906-882e-2fdad5a43f31":{"roots":{"references":[{"attributes":{},"id":"2bf33acf-b388-44f7-adad-1bc02d9324c7","type":"BasicTicker"},{"attributes":{},"id":"825aee1b-e846-4a73-bd35-aa2002667c0b","type":"LinearScale"},{"attributes":{},"id":"ec7a08b0-75d8-4f3a-89e5-4046b007802b","type":"LinearScale"},{"attributes":{"callback":null},"id":"ab680735-9067-4a36-a4c0-780df05dfd76","type":"DataRange1d"},{"attributes":{},"id":"ccf3b126-11f7-4578-b7df-c5014c778860","type":"PanTool"},{"attributes":{},"id":"f2855345-fd87-48f2-8ff5-4b169a5dab26","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ccf3b126-11f7-4578-b7df-c5014c778860","type":"PanTool"},{"id":"d19ba7a8-a148-4c2b-a80d-782d3cf5dccc","type":"WheelZoomTool"},{"id":"93df4786-3e4c-4b14-ad9e-195286c7c23b","type":"BoxZoomTool"},{"id":"1bf96b7e-26a3-4f40-8c60-e807a2f1e117","type":"SaveTool"},{"id":"f2855345-fd87-48f2-8ff5-4b169a5dab26","type":"ResetTool"},{"id":"159f7c19-8022-4275-906b-289f2ef38a87","type":"HelpTool"}]},"id":"f2429d19-5051-43a4-9ba9-ae5325a0ba7e","type":"Toolbar"},{"attributes":{},"id":"f596bbb2-8d46-4928-844b-461ffd201566","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d36381d5-be32-4cbf-ac2b-8193da0f8b8f","type":"SquareX"},{"attributes":{"below":[{"id":"355f72db-f7f9-425d-97f5-ac7bf4c83ab1","type":"LinearAxis"}],"left":[{"id":"5468a52e-fa0c-4eae-b922-dd21ef3bb126","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"355f72db-f7f9-425d-97f5-ac7bf4c83ab1","type":"LinearAxis"},{"id":"6096d7cd-949c-4490-9f3a-37558b74aa4d","type":"Grid"},{"id":"5468a52e-fa0c-4eae-b922-dd21ef3bb126","type":"LinearAxis"},{"id":"f9ff9253-4409-4564-a707-2824279d979f","type":"Grid"},{"id":"1427451c-1c2d-4eaf-9ce2-4589828cc40c","type":"BoxAnnotation"},{"id":"abc4d35b-55c0-4f6a-9381-fe034bc22fff","type":"GlyphRenderer"}],"title":{"id":"4e7f6e83-fccd-473c-adea-3c0c6531dd71","type":"Title"},"toolbar":{"id":"f2429d19-5051-43a4-9ba9-ae5325a0ba7e","type":"Toolbar"},"x_range":{"id":"22c4973a-318c-4cff-b78c-729e9c35fc09","type":"DataRange1d"},"x_scale":{"id":"825aee1b-e846-4a73-bd35-aa2002667c0b","type":"LinearScale"},"y_range":{"id":"ab680735-9067-4a36-a4c0-780df05dfd76","type":"DataRange1d"},"y_scale":{"id":"ec7a08b0-75d8-4f3a-89e5-4046b007802b","type":"LinearScale"}},"id":"09f72aca-0903-4514-a2be-548f154ff1a0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cc102caa-9560-4f04-93eb-c60dbceb7b35","type":"BasicTickFormatter"},{"attributes":{},"id":"d19ba7a8-a148-4c2b-a80d-782d3cf5dccc","type":"WheelZoomTool"},{"attributes":{},"id":"1bf96b7e-26a3-4f40-8c60-e807a2f1e117","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8bcf4d53-bdc6-4783-8265-1c5171e3c170","type":"SquareX"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1427451c-1c2d-4eaf-9ce2-4589828cc40c","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"1427451c-1c2d-4eaf-9ce2-4589828cc40c","type":"BoxAnnotation"}},"id":"93df4786-3e4c-4b14-ad9e-195286c7c23b","type":"BoxZoomTool"},{"attributes":{},"id":"6e07190a-60b6-42ec-96e7-4640cbbcf862","type":"BasicTickFormatter"},{"attributes":{},"id":"159f7c19-8022-4275-906b-289f2ef38a87","type":"HelpTool"},{"attributes":{"callback":null},"id":"22c4973a-318c-4cff-b78c-729e9c35fc09","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ed0f7c91-cacc-4931-bdf3-b247f7750948","type":"ColumnDataSource"},"glyph":{"id":"d36381d5-be32-4cbf-ac2b-8193da0f8b8f","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8bcf4d53-bdc6-4783-8265-1c5171e3c170","type":"SquareX"},"selection_glyph":null,"view":{"id":"b4dc2df1-09b6-4437-903f-15e68b65cbf7","type":"CDSView"}},"id":"abc4d35b-55c0-4f6a-9381-fe034bc22fff","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"ed0f7c91-cacc-4931-bdf3-b247f7750948","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"cc102caa-9560-4f04-93eb-c60dbceb7b35","type":"BasicTickFormatter"},"plot":{"id":"09f72aca-0903-4514-a2be-548f154ff1a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"2bf33acf-b388-44f7-adad-1bc02d9324c7","type":"BasicTicker"}},"id":"5468a52e-fa0c-4eae-b922-dd21ef3bb126","type":"LinearAxis"},{"attributes":{"source":{"id":"ed0f7c91-cacc-4931-bdf3-b247f7750948","type":"ColumnDataSource"}},"id":"b4dc2df1-09b6-4437-903f-15e68b65cbf7","type":"CDSView"},{"attributes":{"plot":{"id":"09f72aca-0903-4514-a2be-548f154ff1a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f596bbb2-8d46-4928-844b-461ffd201566","type":"BasicTicker"}},"id":"6096d7cd-949c-4490-9f3a-37558b74aa4d","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"09f72aca-0903-4514-a2be-548f154ff1a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"2bf33acf-b388-44f7-adad-1bc02d9324c7","type":"BasicTicker"}},"id":"f9ff9253-4409-4564-a707-2824279d979f","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"4e7f6e83-fccd-473c-adea-3c0c6531dd71","type":"Title"},{"attributes":{"formatter":{"id":"6e07190a-60b6-42ec-96e7-4640cbbcf862","type":"BasicTickFormatter"},"plot":{"id":"09f72aca-0903-4514-a2be-548f154ff1a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f596bbb2-8d46-4928-844b-461ffd201566","type":"BasicTicker"}},"id":"355f72db-f7f9-425d-97f5-ac7bf4c83ab1","type":"LinearAxis"}],"root_ids":["09f72aca-0903-4514-a2be-548f154ff1a0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a35f4e5a-1732-4906-882e-2fdad5a43f31","elementid":"04cb7052-f6fa-4984-96c8-84a34a43e4c9","modelid":"09f72aca-0903-4514-a2be-548f154ff1a0"}];
                
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
