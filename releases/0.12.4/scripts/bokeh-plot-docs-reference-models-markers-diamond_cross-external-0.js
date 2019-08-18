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
      };var element = document.getElementById("01123677-354e-452f-87f8-c02710a19132");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '01123677-354e-452f-87f8-c02710a19132' but no matching script tag was found. ")
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
                var docs_json = {"a8a367f3-66fb-4b88-bc2a-78f6b7f41d2b":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"495e9673-d0fe-4df4-bd39-2f71d443d18e","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3948e73f-8e90-4885-a4e4-4a90e4bc52d8","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"10b33fae-faf0-4848-b626-441191f32948","type":"Plot"},"ticker":{"id":"b53e5b99-9119-4d2e-ad1c-498248a03e9c","type":"BasicTicker"}},"id":"7da53543-246b-40da-a517-b43704f1d69a","type":"Grid"},{"attributes":{"callback":null},"id":"6ddf70d7-a5eb-4149-8500-fd8c117fd076","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f30d780b-a290-48eb-84f9-761b026f48aa","type":"BasicTickFormatter"},"plot":{"id":"10b33fae-faf0-4848-b626-441191f32948","type":"Plot"},"ticker":{"id":"b53e5b99-9119-4d2e-ad1c-498248a03e9c","type":"BasicTicker"}},"id":"07e413de-21ee-4ef4-926d-68e16b5d969f","type":"LinearAxis"},{"attributes":{},"id":"f30d780b-a290-48eb-84f9-761b026f48aa","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"495e9673-d0fe-4df4-bd39-2f71d443d18e","type":"ColumnDataSource"},"glyph":{"id":"c0427f61-8b2c-4de5-bdd8-b1414495fe83","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3c60b57d-a6de-4832-82d4-868bc2eb1784","type":"GlyphRenderer"},{"attributes":{},"id":"b53e5b99-9119-4d2e-ad1c-498248a03e9c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"460b6fd4-04e1-426d-a606-e4f25983358a","type":"BasicTickFormatter"},"plot":{"id":"10b33fae-faf0-4848-b626-441191f32948","type":"Plot"},"ticker":{"id":"a8a6aa0b-039a-4492-b4fe-06f01c4e1f6e","type":"BasicTicker"}},"id":"0228ce1c-b552-439f-a55b-4750add10fb6","type":"LinearAxis"},{"attributes":{},"id":"460b6fd4-04e1-426d-a606-e4f25983358a","type":"BasicTickFormatter"},{"attributes":{},"id":"2f852fa7-d4fc-4995-8d7c-550a42fb2b89","type":"ToolEvents"},{"attributes":{"plot":{"id":"10b33fae-faf0-4848-b626-441191f32948","type":"Plot"},"ticker":{"id":"a8a6aa0b-039a-4492-b4fe-06f01c4e1f6e","type":"BasicTicker"}},"id":"d033516a-6ed8-4910-8c76-7e114cc86e43","type":"Grid"},{"attributes":{},"id":"a8a6aa0b-039a-4492-b4fe-06f01c4e1f6e","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0427f61-8b2c-4de5-bdd8-b1414495fe83","type":"DiamondCross"},{"attributes":{"callback":null},"id":"4fb3d8f4-f7d3-45b4-9997-2c60b6643e3e","type":"DataRange1d"},{"attributes":{"below":[{"id":"0228ce1c-b552-439f-a55b-4750add10fb6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"07e413de-21ee-4ef4-926d-68e16b5d969f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3c60b57d-a6de-4832-82d4-868bc2eb1784","type":"GlyphRenderer"},{"id":"0228ce1c-b552-439f-a55b-4750add10fb6","type":"LinearAxis"},{"id":"07e413de-21ee-4ef4-926d-68e16b5d969f","type":"LinearAxis"},{"id":"d033516a-6ed8-4910-8c76-7e114cc86e43","type":"Grid"},{"id":"7da53543-246b-40da-a517-b43704f1d69a","type":"Grid"}],"title":null,"tool_events":{"id":"2f852fa7-d4fc-4995-8d7c-550a42fb2b89","type":"ToolEvents"},"toolbar":{"id":"3948e73f-8e90-4885-a4e4-4a90e4bc52d8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4fb3d8f4-f7d3-45b4-9997-2c60b6643e3e","type":"DataRange1d"},"y_range":{"id":"6ddf70d7-a5eb-4149-8500-fd8c117fd076","type":"DataRange1d"}},"id":"10b33fae-faf0-4848-b626-441191f32948","type":"Plot"}],"root_ids":["10b33fae-faf0-4848-b626-441191f32948"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a8a367f3-66fb-4b88-bc2a-78f6b7f41d2b","elementid":"01123677-354e-452f-87f8-c02710a19132","modelid":"10b33fae-faf0-4848-b626-441191f32948"}];
                
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
