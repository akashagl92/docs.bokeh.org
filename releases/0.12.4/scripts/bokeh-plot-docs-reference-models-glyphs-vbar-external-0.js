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
      };var element = document.getElementById("0291d562-5b47-4fd5-92dd-43c9047424d2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0291d562-5b47-4fd5-92dd-43c9047424d2' but no matching script tag was found. ")
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
                var docs_json = {"49c5c877-db10-4b61-a4b7-6104a15d1b7a":{"roots":{"references":[{"attributes":{"plot":{"id":"7bd510e2-9a15-4d94-9bd1-a1b575f6d683","type":"Plot"},"ticker":{"id":"1ddb5fc4-08b7-42c1-b23f-5968fff63448","type":"BasicTicker"}},"id":"1271eefc-fed5-4d41-9563-05b2c5a19aa8","type":"Grid"},{"attributes":{},"id":"91cb4871-741b-4113-a796-f845945c3497","type":"BasicTickFormatter"},{"attributes":{},"id":"1ddb5fc4-08b7-42c1-b23f-5968fff63448","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7bd510e2-9a15-4d94-9bd1-a1b575f6d683","type":"Plot"},"ticker":{"id":"125e1246-5ea4-4753-9ac1-6ab97947b873","type":"BasicTicker"}},"id":"06607b01-df2e-4229-a507-ff489f5082d8","type":"Grid"},{"attributes":{},"id":"218285a3-20d8-4e52-87fe-3d002d1e9610","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"cc0ac0c4-c973-47e4-a253-0ccef1714b8d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"789251c6-9f97-43d5-99f1-e7c8110cc170","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"094360e4-a1f4-416d-bca9-29bacdd7c022","type":"GlyphRenderer"},{"id":"cc0ac0c4-c973-47e4-a253-0ccef1714b8d","type":"LinearAxis"},{"id":"789251c6-9f97-43d5-99f1-e7c8110cc170","type":"LinearAxis"},{"id":"1271eefc-fed5-4d41-9563-05b2c5a19aa8","type":"Grid"},{"id":"06607b01-df2e-4229-a507-ff489f5082d8","type":"Grid"}],"title":null,"tool_events":{"id":"8d176aeb-3816-403c-a443-12b39e4bcc0f","type":"ToolEvents"},"toolbar":{"id":"cc4b0544-ba4b-4412-8e16-631f03d29cfe","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0c91fbe5-7189-4ce5-abd0-20be97620a17","type":"DataRange1d"},"y_range":{"id":"cbaa256b-7951-4506-9aa2-affba5568ac4","type":"DataRange1d"}},"id":"7bd510e2-9a15-4d94-9bd1-a1b575f6d683","type":"Plot"},{"attributes":{"callback":null},"id":"cbaa256b-7951-4506-9aa2-affba5568ac4","type":"DataRange1d"},{"attributes":{},"id":"125e1246-5ea4-4753-9ac1-6ab97947b873","type":"BasicTicker"},{"attributes":{"formatter":{"id":"91cb4871-741b-4113-a796-f845945c3497","type":"BasicTickFormatter"},"plot":{"id":"7bd510e2-9a15-4d94-9bd1-a1b575f6d683","type":"Plot"},"ticker":{"id":"1ddb5fc4-08b7-42c1-b23f-5968fff63448","type":"BasicTicker"}},"id":"cc0ac0c4-c973-47e4-a253-0ccef1714b8d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"81b33d35-6db6-414f-afd2-c26c2540530d","type":"ColumnDataSource"},"glyph":{"id":"8334c4a4-a18b-4be7-9ada-c68ee7690886","type":"VBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"094360e4-a1f4-416d-bca9-29bacdd7c022","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cc4b0544-ba4b-4412-8e16-631f03d29cfe","type":"Toolbar"},{"attributes":{},"id":"8d176aeb-3816-403c-a443-12b39e4bcc0f","type":"ToolEvents"},{"attributes":{"callback":null},"id":"0c91fbe5-7189-4ce5-abd0-20be97620a17","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["top","x"],"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"81b33d35-6db6-414f-afd2-c26c2540530d","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"8334c4a4-a18b-4be7-9ada-c68ee7690886","type":"VBar"},{"attributes":{"formatter":{"id":"218285a3-20d8-4e52-87fe-3d002d1e9610","type":"BasicTickFormatter"},"plot":{"id":"7bd510e2-9a15-4d94-9bd1-a1b575f6d683","type":"Plot"},"ticker":{"id":"125e1246-5ea4-4753-9ac1-6ab97947b873","type":"BasicTicker"}},"id":"789251c6-9f97-43d5-99f1-e7c8110cc170","type":"LinearAxis"}],"root_ids":["7bd510e2-9a15-4d94-9bd1-a1b575f6d683"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"49c5c877-db10-4b61-a4b7-6104a15d1b7a","elementid":"0291d562-5b47-4fd5-92dd-43c9047424d2","modelid":"7bd510e2-9a15-4d94-9bd1-a1b575f6d683"}];
                
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
