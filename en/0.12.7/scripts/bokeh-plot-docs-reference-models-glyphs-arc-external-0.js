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
      };var element = document.getElementById("b095c858-48c7-4cb1-a442-531d1b75f655");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b095c858-48c7-4cb1-a442-531d1b75f655' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"cdbbc76b-d258-49fc-814a-91a0c3dcdc06":{"roots":{"references":[{"attributes":{"formatter":{"id":"a5dcd5a1-5e85-4001-bba7-e29d17dc1e0e","type":"BasicTickFormatter"},"plot":{"id":"bab49953-50fa-43b7-baa7-877370c82153","type":"Plot"},"ticker":{"id":"dbccf5d2-3765-4626-a39e-3d18d724c770","type":"BasicTicker"}},"id":"58ea9054-09e6-4b2e-9480-9f31545d6abe","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8b763797-3b76-4ee0-9683-9535c306b783","type":"DataRange1d"},{"attributes":{},"id":"cc27f404-e9c0-43b8-9941-ce4e79ceafb0","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"14f17b17-289a-4255-8682-b24d030d1e70","type":"ColumnDataSource"},{"attributes":{},"id":"a3924693-2a73-42f3-9799-da2ec4bafb90","type":"BasicTicker"},{"attributes":{"formatter":{"id":"12051035-8567-42b0-8759-6edad568ba54","type":"BasicTickFormatter"},"plot":{"id":"bab49953-50fa-43b7-baa7-877370c82153","type":"Plot"},"ticker":{"id":"a3924693-2a73-42f3-9799-da2ec4bafb90","type":"BasicTicker"}},"id":"ebb6d484-7693-43f3-ac86-cab1b083c326","type":"LinearAxis"},{"attributes":{},"id":"12051035-8567-42b0-8759-6edad568ba54","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"976f8b4f-a9fd-4e3c-bd8f-32be682908a9","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14f17b17-289a-4255-8682-b24d030d1e70","type":"ColumnDataSource"},"glyph":{"id":"e50a8292-1dbc-4bf9-a445-424659651620","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"72cb7418-5f06-4269-9f91-a6555e2caa20","type":"CDSView"}},"id":"3434a76a-4a3c-476b-b6af-c6e035933df2","type":"GlyphRenderer"},{"attributes":{},"id":"971ecfbf-177f-4682-8035-15b16d402adc","type":"LinearScale"},{"attributes":{},"id":"dbccf5d2-3765-4626-a39e-3d18d724c770","type":"BasicTicker"},{"attributes":{"below":[{"id":"ebb6d484-7693-43f3-ac86-cab1b083c326","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"58ea9054-09e6-4b2e-9480-9f31545d6abe","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3434a76a-4a3c-476b-b6af-c6e035933df2","type":"GlyphRenderer"},{"id":"ebb6d484-7693-43f3-ac86-cab1b083c326","type":"LinearAxis"},{"id":"58ea9054-09e6-4b2e-9480-9f31545d6abe","type":"LinearAxis"},{"id":"aed73d80-89da-4b04-a462-c04829b0c3a9","type":"Grid"},{"id":"31641ef2-b3aa-4150-8555-d2fe3069c27c","type":"Grid"}],"title":null,"toolbar":{"id":"67b265f7-6b7d-4f9e-89a5-1434f8d959da","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8b763797-3b76-4ee0-9683-9535c306b783","type":"DataRange1d"},"x_scale":{"id":"cc27f404-e9c0-43b8-9941-ce4e79ceafb0","type":"LinearScale"},"y_range":{"id":"976f8b4f-a9fd-4e3c-bd8f-32be682908a9","type":"DataRange1d"},"y_scale":{"id":"971ecfbf-177f-4682-8035-15b16d402adc","type":"LinearScale"}},"id":"bab49953-50fa-43b7-baa7-877370c82153","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"e50a8292-1dbc-4bf9-a445-424659651620","type":"Arc"},{"attributes":{"source":{"id":"14f17b17-289a-4255-8682-b24d030d1e70","type":"ColumnDataSource"}},"id":"72cb7418-5f06-4269-9f91-a6555e2caa20","type":"CDSView"},{"attributes":{},"id":"a5dcd5a1-5e85-4001-bba7-e29d17dc1e0e","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"bab49953-50fa-43b7-baa7-877370c82153","type":"Plot"},"ticker":{"id":"dbccf5d2-3765-4626-a39e-3d18d724c770","type":"BasicTicker"}},"id":"31641ef2-b3aa-4150-8555-d2fe3069c27c","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"67b265f7-6b7d-4f9e-89a5-1434f8d959da","type":"Toolbar"},{"attributes":{"plot":{"id":"bab49953-50fa-43b7-baa7-877370c82153","type":"Plot"},"ticker":{"id":"a3924693-2a73-42f3-9799-da2ec4bafb90","type":"BasicTicker"}},"id":"aed73d80-89da-4b04-a462-c04829b0c3a9","type":"Grid"}],"root_ids":["bab49953-50fa-43b7-baa7-877370c82153"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"cdbbc76b-d258-49fc-814a-91a0c3dcdc06","elementid":"b095c858-48c7-4cb1-a442-531d1b75f655","modelid":"bab49953-50fa-43b7-baa7-877370c82153"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
