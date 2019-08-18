(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("4a52750e-edd9-4164-ad29-da931a401aa4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a52750e-edd9-4164-ad29-da931a401aa4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"8760eb0f-7154-471e-bbd0-390b63755487":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"787324f5-cc6a-4924-b52b-6d265a341eb5","type":"ColumnDataSource"},{"attributes":{},"id":"1685bcc2-5c44-41cc-8b27-d929d4c9443d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6e083e6-9f2a-4ce4-9cc9-5998561fb9e4","type":"SquareX"},{"attributes":{},"id":"c8d2149d-5e5d-428d-8ee9-4775281495c4","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c8d2149d-5e5d-428d-8ee9-4775281495c4","type":"BasicTickFormatter"},"plot":{"id":"3fcb7868-bdb6-4b5b-ada0-fa5b1ebe9d60","type":"Plot"},"ticker":{"id":"b4718bdf-2975-4889-baf4-abfa238a37d5","type":"BasicTicker"}},"id":"693ae0b3-4a99-40a2-b5cc-9623ba68322a","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0c22ed45-2196-4679-aae0-3886b32e9914","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"3fcb7868-bdb6-4b5b-ada0-fa5b1ebe9d60","type":"Plot"},"ticker":{"id":"1685bcc2-5c44-41cc-8b27-d929d4c9443d","type":"BasicTicker"}},"id":"d206a310-624e-4cff-a615-5db2586e3a3b","type":"Grid"},{"attributes":{},"id":"f6c58027-9ae3-4c44-a09d-c2cec60ef292","type":"ToolEvents"},{"attributes":{"formatter":{"id":"02c5e32a-0287-4e35-8ddc-03aee111dd53","type":"BasicTickFormatter"},"plot":{"id":"3fcb7868-bdb6-4b5b-ada0-fa5b1ebe9d60","type":"Plot"},"ticker":{"id":"1685bcc2-5c44-41cc-8b27-d929d4c9443d","type":"BasicTicker"}},"id":"52cd13d2-4eab-43d3-b355-092ccfc90ed9","type":"LinearAxis"},{"attributes":{"data_source":{"id":"787324f5-cc6a-4924-b52b-6d265a341eb5","type":"ColumnDataSource"},"glyph":{"id":"c6e083e6-9f2a-4ce4-9cc9-5998561fb9e4","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"27f85c27-d930-487e-801d-8e8cea36dca8","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"693ae0b3-4a99-40a2-b5cc-9623ba68322a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"52cd13d2-4eab-43d3-b355-092ccfc90ed9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27f85c27-d930-487e-801d-8e8cea36dca8","type":"GlyphRenderer"},{"id":"693ae0b3-4a99-40a2-b5cc-9623ba68322a","type":"LinearAxis"},{"id":"52cd13d2-4eab-43d3-b355-092ccfc90ed9","type":"LinearAxis"},{"id":"6aba2ad0-3bb9-4dfb-aa6a-4b37b5fa9290","type":"Grid"},{"id":"d206a310-624e-4cff-a615-5db2586e3a3b","type":"Grid"}],"title":null,"tool_events":{"id":"f6c58027-9ae3-4c44-a09d-c2cec60ef292","type":"ToolEvents"},"toolbar":{"id":"0c22ed45-2196-4679-aae0-3886b32e9914","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d067e21d-47a7-461f-b0d1-bfa46eec4628","type":"DataRange1d"},"y_range":{"id":"07c5d595-304e-4f78-808f-824260f38137","type":"DataRange1d"}},"id":"3fcb7868-bdb6-4b5b-ada0-fa5b1ebe9d60","type":"Plot"},{"attributes":{},"id":"b4718bdf-2975-4889-baf4-abfa238a37d5","type":"BasicTicker"},{"attributes":{"plot":{"id":"3fcb7868-bdb6-4b5b-ada0-fa5b1ebe9d60","type":"Plot"},"ticker":{"id":"b4718bdf-2975-4889-baf4-abfa238a37d5","type":"BasicTicker"}},"id":"6aba2ad0-3bb9-4dfb-aa6a-4b37b5fa9290","type":"Grid"},{"attributes":{"callback":null},"id":"07c5d595-304e-4f78-808f-824260f38137","type":"DataRange1d"},{"attributes":{"callback":null},"id":"d067e21d-47a7-461f-b0d1-bfa46eec4628","type":"DataRange1d"},{"attributes":{},"id":"02c5e32a-0287-4e35-8ddc-03aee111dd53","type":"BasicTickFormatter"}],"root_ids":["3fcb7868-bdb6-4b5b-ada0-fa5b1ebe9d60"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"8760eb0f-7154-471e-bbd0-390b63755487","elementid":"4a52750e-edd9-4164-ad29-da931a401aa4","modelid":"3fcb7868-bdb6-4b5b-ada0-fa5b1ebe9d60"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
