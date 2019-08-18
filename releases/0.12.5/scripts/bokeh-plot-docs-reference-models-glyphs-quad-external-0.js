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
      };var element = document.getElementById("e8d3567b-c903-4f0d-8855-0e9e86ea5bf7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8d3567b-c903-4f0d-8855-0e9e86ea5bf7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"985e613e-7674-494d-93c6-28221870179f":{"roots":{"references":[{"attributes":{},"id":"c74d7a10-fef2-468b-be9a-85bada4853af","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c74d7a10-fef2-468b-be9a-85bada4853af","type":"BasicTickFormatter"},"plot":{"id":"7a0e34e3-5a41-4358-87ad-f360e4ec27a1","type":"Plot"},"ticker":{"id":"1db818b0-110f-4cc7-90ed-5c87fa84fe55","type":"BasicTicker"}},"id":"e06d78d9-bc9f-47aa-aff0-df51a1a52735","type":"LinearAxis"},{"attributes":{},"id":"1db818b0-110f-4cc7-90ed-5c87fa84fe55","type":"BasicTicker"},{"attributes":{},"id":"830ae4e2-b01f-4bae-890f-1b7e3955c601","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f30dd11f-68a4-4aef-8907-f691453fb51b","type":"ColumnDataSource"},"glyph":{"id":"76470952-5049-4a04-802e-c660d8a76758","type":"Quad"},"hover_glyph":null,"muted_glyph":null},"id":"40e1dc3d-ec44-4be0-b408-9f0d37176964","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"243ae1d0-0993-4942-8f38-43b4c693c914","type":"BasicTickFormatter"},"plot":{"id":"7a0e34e3-5a41-4358-87ad-f360e4ec27a1","type":"Plot"},"ticker":{"id":"830ae4e2-b01f-4bae-890f-1b7e3955c601","type":"BasicTicker"}},"id":"1123c798-8b8b-4387-9cf9-3fee7e5d8f3c","type":"LinearAxis"},{"attributes":{},"id":"dd1491a2-be0b-4ba1-859e-f88a4b56f624","type":"ToolEvents"},{"attributes":{"plot":{"id":"7a0e34e3-5a41-4358-87ad-f360e4ec27a1","type":"Plot"},"ticker":{"id":"830ae4e2-b01f-4bae-890f-1b7e3955c601","type":"BasicTicker"}},"id":"ead3935c-01c4-4325-93c7-55aac7e3f031","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"76470952-5049-4a04-802e-c660d8a76758","type":"Quad"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fff2177e-8154-4438-92d3-2dc0a392480a","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["top","right","bottom","left"],"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"f30dd11f-68a4-4aef-8907-f691453fb51b","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"7a0e34e3-5a41-4358-87ad-f360e4ec27a1","type":"Plot"},"ticker":{"id":"1db818b0-110f-4cc7-90ed-5c87fa84fe55","type":"BasicTicker"}},"id":"d181c88c-484b-407c-80a6-381e1f843866","type":"Grid"},{"attributes":{"below":[{"id":"1123c798-8b8b-4387-9cf9-3fee7e5d8f3c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e06d78d9-bc9f-47aa-aff0-df51a1a52735","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"40e1dc3d-ec44-4be0-b408-9f0d37176964","type":"GlyphRenderer"},{"id":"1123c798-8b8b-4387-9cf9-3fee7e5d8f3c","type":"LinearAxis"},{"id":"e06d78d9-bc9f-47aa-aff0-df51a1a52735","type":"LinearAxis"},{"id":"ead3935c-01c4-4325-93c7-55aac7e3f031","type":"Grid"},{"id":"d181c88c-484b-407c-80a6-381e1f843866","type":"Grid"}],"title":null,"tool_events":{"id":"dd1491a2-be0b-4ba1-859e-f88a4b56f624","type":"ToolEvents"},"toolbar":{"id":"fff2177e-8154-4438-92d3-2dc0a392480a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"47a8c8b4-822b-4ff0-b017-d69b74253df8","type":"DataRange1d"},"y_range":{"id":"360c178c-835b-4c96-8f0d-bc4aa58d1ba5","type":"DataRange1d"}},"id":"7a0e34e3-5a41-4358-87ad-f360e4ec27a1","type":"Plot"},{"attributes":{"callback":null},"id":"360c178c-835b-4c96-8f0d-bc4aa58d1ba5","type":"DataRange1d"},{"attributes":{"callback":null},"id":"47a8c8b4-822b-4ff0-b017-d69b74253df8","type":"DataRange1d"},{"attributes":{},"id":"243ae1d0-0993-4942-8f38-43b4c693c914","type":"BasicTickFormatter"}],"root_ids":["7a0e34e3-5a41-4358-87ad-f360e4ec27a1"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"985e613e-7674-494d-93c6-28221870179f","elementid":"e8d3567b-c903-4f0d-8855-0e9e86ea5bf7","modelid":"7a0e34e3-5a41-4358-87ad-f360e4ec27a1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
