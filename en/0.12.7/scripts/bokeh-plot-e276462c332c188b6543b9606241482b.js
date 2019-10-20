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
      };var element = document.getElementById("5faa0984-7f6a-4716-a637-361c9e9bc73d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5faa0984-7f6a-4716-a637-361c9e9bc73d' but no matching script tag was found. ")
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
                var docs_json = {"a9e85e19-2e68-4d15-a950-85140e99c0a1":{"roots":{"references":[{"attributes":{"plot":{"id":"9a8670b8-f7be-40fd-a129-437006d75bdf","subtype":"Figure","type":"Plot"},"ticker":{"id":"dae483ef-d9aa-407e-baf2-9af58feed696","type":"BasicTicker"}},"id":"6642d1d6-c14e-4214-98e0-ca76fdd844be","type":"Grid"},{"attributes":{},"id":"dae483ef-d9aa-407e-baf2-9af58feed696","type":"BasicTicker"},{"attributes":{"align":"center","plot":{"id":"9a8670b8-f7be-40fd-a129-437006d75bdf","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"0923b176-df90-404a-a2d3-11e6d993d8bb","type":"Title"},{"attributes":{"overlay":{"id":"73b053d9-13a9-435a-b7f7-52972b779d55","type":"BoxAnnotation"}},"id":"5fe74c6f-d5c0-4879-bffd-29192b5f0d64","type":"BoxZoomTool"},{"attributes":{"source":{"id":"c2b6f180-a4dd-40f6-adf0-95a6aa26641a","type":"ColumnDataSource"}},"id":"da892397-39ca-4a60-b459-16bd0048657a","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"9a8670b8-f7be-40fd-a129-437006d75bdf","subtype":"Figure","type":"Plot"},"ticker":{"id":"0872c9d9-4501-4eb1-bc86-48202535ce37","type":"BasicTicker"}},"id":"46ad6720-fec4-4cee-a5f9-45f948f65896","type":"Grid"},{"attributes":{"formatter":{"id":"36e382c8-9cc7-4bb5-81a8-c05189f7c0be","type":"BasicTickFormatter"},"plot":{"id":"9a8670b8-f7be-40fd-a129-437006d75bdf","subtype":"Figure","type":"Plot"},"ticker":{"id":"0872c9d9-4501-4eb1-bc86-48202535ce37","type":"BasicTicker"}},"id":"971452af-4b80-47e2-a8b2-e5ccdf89a38c","type":"LinearAxis"},{"attributes":{},"id":"681565cc-3a0b-4be4-a22b-5ab5a0354056","type":"WheelZoomTool"},{"attributes":{},"id":"438861e7-56ef-4471-aabf-e6f76095897b","type":"SaveTool"},{"attributes":{"callback":null},"id":"206afc3b-b0c1-44db-8555-5d188a41a21c","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8258291f-cd8d-45f7-8df1-9f6c429d48dc","type":"DataRange1d"},{"attributes":{},"id":"cdebd678-1991-4f8f-92cc-24f0e509fba9","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"c2b6f180-a4dd-40f6-adf0-95a6aa26641a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"330ca0d6-4c38-4eb9-9548-a8f516893cc3","type":"Circle"},{"attributes":{},"id":"866cf36d-d3a1-491d-8cf2-a9b948ff63a7","type":"HelpTool"},{"attributes":{},"id":"81b4fb05-f833-4c6e-acfd-234b51444fda","type":"LinearScale"},{"attributes":{},"id":"0a7e0ad6-a0b5-4a1e-b75b-e3cb2b511dc7","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Left Title"},"id":"d43433aa-6b3b-4307-b692-1ec75c84cf1b","type":"Title"},{"attributes":{},"id":"0872c9d9-4501-4eb1-bc86-48202535ce37","type":"BasicTicker"},{"attributes":{},"id":"54388047-676f-406c-823e-17e68cf4f160","type":"LinearScale"},{"attributes":{"formatter":{"id":"0a7e0ad6-a0b5-4a1e-b75b-e3cb2b511dc7","type":"BasicTickFormatter"},"plot":{"id":"9a8670b8-f7be-40fd-a129-437006d75bdf","subtype":"Figure","type":"Plot"},"ticker":{"id":"dae483ef-d9aa-407e-baf2-9af58feed696","type":"BasicTicker"}},"id":"ca1947c1-548b-4fc4-95d1-3d463fe0061d","type":"LinearAxis"},{"attributes":{},"id":"feb5b8b2-b99c-4dc5-aa23-298655754bfa","type":"PanTool"},{"attributes":{"below":[{"id":"ca1947c1-548b-4fc4-95d1-3d463fe0061d","type":"LinearAxis"},{"id":"0923b176-df90-404a-a2d3-11e6d993d8bb","type":"Title"}],"left":[{"id":"971452af-4b80-47e2-a8b2-e5ccdf89a38c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ca1947c1-548b-4fc4-95d1-3d463fe0061d","type":"LinearAxis"},{"id":"6642d1d6-c14e-4214-98e0-ca76fdd844be","type":"Grid"},{"id":"971452af-4b80-47e2-a8b2-e5ccdf89a38c","type":"LinearAxis"},{"id":"46ad6720-fec4-4cee-a5f9-45f948f65896","type":"Grid"},{"id":"73b053d9-13a9-435a-b7f7-52972b779d55","type":"BoxAnnotation"},{"id":"cac62406-1ab4-484a-863b-34d508f4c53c","type":"GlyphRenderer"},{"id":"0923b176-df90-404a-a2d3-11e6d993d8bb","type":"Title"}],"title":{"id":"d43433aa-6b3b-4307-b692-1ec75c84cf1b","type":"Title"},"title_location":"left","toolbar":{"id":"c523eb24-0cac-46a8-8400-be4dda187cde","type":"Toolbar"},"x_range":{"id":"8258291f-cd8d-45f7-8df1-9f6c429d48dc","type":"DataRange1d"},"x_scale":{"id":"81b4fb05-f833-4c6e-acfd-234b51444fda","type":"LinearScale"},"y_range":{"id":"206afc3b-b0c1-44db-8555-5d188a41a21c","type":"DataRange1d"},"y_scale":{"id":"54388047-676f-406c-823e-17e68cf4f160","type":"LinearScale"}},"id":"9a8670b8-f7be-40fd-a129-437006d75bdf","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"73b053d9-13a9-435a-b7f7-52972b779d55","type":"BoxAnnotation"},{"attributes":{},"id":"36e382c8-9cc7-4bb5-81a8-c05189f7c0be","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"feb5b8b2-b99c-4dc5-aa23-298655754bfa","type":"PanTool"},{"id":"681565cc-3a0b-4be4-a22b-5ab5a0354056","type":"WheelZoomTool"},{"id":"5fe74c6f-d5c0-4879-bffd-29192b5f0d64","type":"BoxZoomTool"},{"id":"438861e7-56ef-4471-aabf-e6f76095897b","type":"SaveTool"},{"id":"cdebd678-1991-4f8f-92cc-24f0e509fba9","type":"ResetTool"},{"id":"866cf36d-d3a1-491d-8cf2-a9b948ff63a7","type":"HelpTool"}]},"id":"c523eb24-0cac-46a8-8400-be4dda187cde","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b27c6ff-ff74-495e-bb9e-37e328172a93","type":"Circle"},{"attributes":{"data_source":{"id":"c2b6f180-a4dd-40f6-adf0-95a6aa26641a","type":"ColumnDataSource"},"glyph":{"id":"6b27c6ff-ff74-495e-bb9e-37e328172a93","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"330ca0d6-4c38-4eb9-9548-a8f516893cc3","type":"Circle"},"selection_glyph":null,"view":{"id":"da892397-39ca-4a60-b459-16bd0048657a","type":"CDSView"}},"id":"cac62406-1ab4-484a-863b-34d508f4c53c","type":"GlyphRenderer"}],"root_ids":["9a8670b8-f7be-40fd-a129-437006d75bdf"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a9e85e19-2e68-4d15-a950-85140e99c0a1","elementid":"5faa0984-7f6a-4716-a637-361c9e9bc73d","modelid":"9a8670b8-f7be-40fd-a129-437006d75bdf"}];
                
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
