document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("b3c579b3-3163-432a-bf78-1010786330d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b3c579b3-3163-432a-bf78-1010786330d5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"03131310-5683-4af7-82d0-3d5802adb091":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f7e6760b-2db2-4c5d-9680-be645a5a3ba2","type":"Toolbar"},{"attributes":{"below":[{"id":"e1152b90-0bb6-4ceb-9d3b-0bbde419a887","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"47bee57c-39e9-4464-98aa-fe1f6513811e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2d7bdd23-b181-41fa-a47b-ccf1037aefbf","type":"GlyphRenderer"},{"id":"e1152b90-0bb6-4ceb-9d3b-0bbde419a887","type":"LinearAxis"},{"id":"47bee57c-39e9-4464-98aa-fe1f6513811e","type":"LinearAxis"},{"id":"d28562d2-b070-4123-9c6a-e42742c6cae9","type":"Grid"},{"id":"846eae69-bd78-4c42-afc7-65cf06d1dd18","type":"Grid"}],"title":null,"tool_events":{"id":"8a8b0ccb-6207-4ba0-a5c7-5e0556abd5fc","type":"ToolEvents"},"toolbar":{"id":"f7e6760b-2db2-4c5d-9680-be645a5a3ba2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ab3ebee1-2424-4af2-a406-8e1c4859c2c4","type":"DataRange1d"},"y_range":{"id":"1c8e953e-15b6-469c-a861-b1a6e8c311ef","type":"DataRange1d"}},"id":"85ac7fcc-8df6-4b77-ad37-a60685936ac5","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"85ac7fcc-8df6-4b77-ad37-a60685936ac5","type":"Plot"},"ticker":{"id":"e635c343-3dfb-429c-941e-bdb7ebedd570","type":"BasicTicker"}},"id":"846eae69-bd78-4c42-afc7-65cf06d1dd18","type":"Grid"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"260f2550-c14a-42a7-bbe2-4bda152bec56","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"6da9a1a0-a1c8-4590-ad18-8abce66fc190","type":"BasicTickFormatter"},"plot":{"id":"85ac7fcc-8df6-4b77-ad37-a60685936ac5","type":"Plot"},"ticker":{"id":"e635c343-3dfb-429c-941e-bdb7ebedd570","type":"BasicTicker"}},"id":"47bee57c-39e9-4464-98aa-fe1f6513811e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1c8e953e-15b6-469c-a861-b1a6e8c311ef","type":"DataRange1d"},{"attributes":{},"id":"c9102e22-dd7d-4ef8-906a-7a4d710ccefc","type":"BasicTickFormatter"},{"attributes":{},"id":"e635c343-3dfb-429c-941e-bdb7ebedd570","type":"BasicTicker"},{"attributes":{},"id":"6da9a1a0-a1c8-4590-ad18-8abce66fc190","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"85ac7fcc-8df6-4b77-ad37-a60685936ac5","type":"Plot"},"ticker":{"id":"3cfdbfbe-731f-4b6a-9bdb-ed36f0c0cbe5","type":"BasicTicker"}},"id":"d28562d2-b070-4123-9c6a-e42742c6cae9","type":"Grid"},{"attributes":{"formatter":{"id":"c9102e22-dd7d-4ef8-906a-7a4d710ccefc","type":"BasicTickFormatter"},"plot":{"id":"85ac7fcc-8df6-4b77-ad37-a60685936ac5","type":"Plot"},"ticker":{"id":"3cfdbfbe-731f-4b6a-9bdb-ed36f0c0cbe5","type":"BasicTicker"}},"id":"e1152b90-0bb6-4ceb-9d3b-0bbde419a887","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ab3ebee1-2424-4af2-a406-8e1c4859c2c4","type":"DataRange1d"},{"attributes":{},"id":"3cfdbfbe-731f-4b6a-9bdb-ed36f0c0cbe5","type":"BasicTicker"},{"attributes":{"data_source":{"id":"260f2550-c14a-42a7-bbe2-4bda152bec56","type":"ColumnDataSource"},"glyph":{"id":"cb39714d-092a-4720-a3ae-a3ae615ae993","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2d7bdd23-b181-41fa-a47b-ccf1037aefbf","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"cb39714d-092a-4720-a3ae-a3ae615ae993","type":"Patches"},{"attributes":{},"id":"8a8b0ccb-6207-4ba0-a5c7-5e0556abd5fc","type":"ToolEvents"}],"root_ids":["85ac7fcc-8df6-4b77-ad37-a60685936ac5"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"03131310-5683-4af7-82d0-3d5802adb091","elementid":"b3c579b3-3163-432a-bf78-1010786330d5","modelid":"85ac7fcc-8df6-4b77-ad37-a60685936ac5"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});