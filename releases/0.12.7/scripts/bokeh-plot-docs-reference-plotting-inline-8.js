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
      };var element = document.getElementById("d7ffa4a5-0cf9-44fc-b6ed-e863846bd176");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7ffa4a5-0cf9-44fc-b6ed-e863846bd176' but no matching script tag was found. ")
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
                var docs_json = {"e6f3ec44-517b-4a0f-8e37-baae2c716124":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e6f907a3-3b33-40d4-bfce-257c2a839764","type":"PanTool"},{"id":"550908ad-75dd-4ff1-873e-11a74f044ab4","type":"WheelZoomTool"},{"id":"1db508a6-3578-417a-af51-26f6fc48ddb7","type":"BoxZoomTool"},{"id":"c5b85a58-da0f-4917-b179-12aa46259a16","type":"SaveTool"},{"id":"4ba66089-1118-4752-b95c-e4426278e634","type":"ResetTool"},{"id":"5a4c0afc-77e0-405a-bee6-fd13bd449027","type":"HelpTool"}]},"id":"766c7efe-7c26-4c95-b383-7ef31a8be243","type":"Toolbar"},{"attributes":{},"id":"95c85ae2-9eb3-44a9-9e86-9394f48b4d9e","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1c249d0d-6ba6-41b9-803f-e2fa9164e448","type":"BoxAnnotation"},{"attributes":{},"id":"c5b85a58-da0f-4917-b179-12aa46259a16","type":"SaveTool"},{"attributes":{"formatter":{"id":"5684381e-0950-41fb-9a38-b5214999fa9d","type":"BasicTickFormatter"},"plot":{"id":"18e084df-fd53-4b34-91cf-1ddb9e3c3df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"40a10e4b-6fbf-4d03-8bed-f94560b9b23a","type":"BasicTicker"}},"id":"2c899fe6-702d-4bce-8864-a8f7d508f400","type":"LinearAxis"},{"attributes":{},"id":"550908ad-75dd-4ff1-873e-11a74f044ab4","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"18e084df-fd53-4b34-91cf-1ddb9e3c3df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"40a10e4b-6fbf-4d03-8bed-f94560b9b23a","type":"BasicTicker"}},"id":"73d9531e-a35f-4b32-81c9-5c4468041f67","type":"Grid"},{"attributes":{},"id":"5a4c0afc-77e0-405a-bee6-fd13bd449027","type":"HelpTool"},{"attributes":{},"id":"5684381e-0950-41fb-9a38-b5214999fa9d","type":"BasicTickFormatter"},{"attributes":{},"id":"40a10e4b-6fbf-4d03-8bed-f94560b9b23a","type":"BasicTicker"},{"attributes":{},"id":"e6f907a3-3b33-40d4-bfce-257c2a839764","type":"PanTool"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"bfe00b30-0215-442d-a137-619398272716","type":"Ellipse"},{"attributes":{"overlay":{"id":"1c249d0d-6ba6-41b9-803f-e2fa9164e448","type":"BoxAnnotation"}},"id":"1db508a6-3578-417a-af51-26f6fc48ddb7","type":"BoxZoomTool"},{"attributes":{},"id":"6bdd52aa-0da3-41ad-9129-59a316418206","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"66d1c577-613c-4dd3-9934-4c9776c756d9","type":"Title"},{"attributes":{"formatter":{"id":"46bd4efe-9684-4189-a563-79697ecf8c24","type":"BasicTickFormatter"},"plot":{"id":"18e084df-fd53-4b34-91cf-1ddb9e3c3df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bdd52aa-0da3-41ad-9129-59a316418206","type":"BasicTicker"}},"id":"bf3048d2-924b-4763-b5fc-9d0e57151683","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f6eb25c8-7763-4d49-8bea-18b536c621a7","type":"ColumnDataSource"},"glyph":{"id":"bfe00b30-0215-442d-a137-619398272716","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1a21a3e0-5405-4e46-bf1b-1a0a72291c18","type":"Ellipse"},"selection_glyph":null,"view":{"id":"88e8f771-aa8b-4091-830d-882a3293d61c","type":"CDSView"}},"id":"df73c67a-9710-4765-945a-334590a2c8dc","type":"GlyphRenderer"},{"attributes":{},"id":"4ba66089-1118-4752-b95c-e4426278e634","type":"ResetTool"},{"attributes":{"source":{"id":"f6eb25c8-7763-4d49-8bea-18b536c621a7","type":"ColumnDataSource"}},"id":"88e8f771-aa8b-4091-830d-882a3293d61c","type":"CDSView"},{"attributes":{"below":[{"id":"bf3048d2-924b-4763-b5fc-9d0e57151683","type":"LinearAxis"}],"left":[{"id":"2c899fe6-702d-4bce-8864-a8f7d508f400","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bf3048d2-924b-4763-b5fc-9d0e57151683","type":"LinearAxis"},{"id":"a9eb28fa-1e17-4b42-b05b-d44a3de14e38","type":"Grid"},{"id":"2c899fe6-702d-4bce-8864-a8f7d508f400","type":"LinearAxis"},{"id":"73d9531e-a35f-4b32-81c9-5c4468041f67","type":"Grid"},{"id":"1c249d0d-6ba6-41b9-803f-e2fa9164e448","type":"BoxAnnotation"},{"id":"df73c67a-9710-4765-945a-334590a2c8dc","type":"GlyphRenderer"}],"title":{"id":"66d1c577-613c-4dd3-9934-4c9776c756d9","type":"Title"},"toolbar":{"id":"766c7efe-7c26-4c95-b383-7ef31a8be243","type":"Toolbar"},"x_range":{"id":"cd08fc7a-4d86-4948-aa64-0fdded212aca","type":"DataRange1d"},"x_scale":{"id":"c32d8557-8607-47c5-8b95-baf4a69262e7","type":"LinearScale"},"y_range":{"id":"dbd9888b-e961-4b71-ac08-e5cf5ba27c49","type":"DataRange1d"},"y_scale":{"id":"95c85ae2-9eb3-44a9-9e86-9394f48b4d9e","type":"LinearScale"}},"id":"18e084df-fd53-4b34-91cf-1ddb9e3c3df2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"f6eb25c8-7763-4d49-8bea-18b536c621a7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"18e084df-fd53-4b34-91cf-1ddb9e3c3df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bdd52aa-0da3-41ad-9129-59a316418206","type":"BasicTicker"}},"id":"a9eb28fa-1e17-4b42-b05b-d44a3de14e38","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a21a3e0-5405-4e46-bf1b-1a0a72291c18","type":"Ellipse"},{"attributes":{"callback":null},"id":"dbd9888b-e961-4b71-ac08-e5cf5ba27c49","type":"DataRange1d"},{"attributes":{"callback":null},"id":"cd08fc7a-4d86-4948-aa64-0fdded212aca","type":"DataRange1d"},{"attributes":{},"id":"c32d8557-8607-47c5-8b95-baf4a69262e7","type":"LinearScale"},{"attributes":{},"id":"46bd4efe-9684-4189-a563-79697ecf8c24","type":"BasicTickFormatter"}],"root_ids":["18e084df-fd53-4b34-91cf-1ddb9e3c3df2"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e6f3ec44-517b-4a0f-8e37-baae2c716124","elementid":"d7ffa4a5-0cf9-44fc-b6ed-e863846bd176","modelid":"18e084df-fd53-4b34-91cf-1ddb9e3c3df2"}];
                
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
