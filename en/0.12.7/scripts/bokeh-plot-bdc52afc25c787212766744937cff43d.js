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
      };var element = document.getElementById("2affb927-be60-4112-8c1f-cfb73dc76a8e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2affb927-be60-4112-8c1f-cfb73dc76a8e' but no matching script tag was found. ")
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
                var docs_json = {"950c127d-e70a-48d0-86a8-f950454313ad":{"roots":{"references":[{"attributes":{"items":[{"id":"81042dc8-cccd-4144-b97b-215b33d9d90e","type":"LegendItem"},{"id":"d7a53942-b051-4c80-ba1f-67d8ebe45419","type":"LegendItem"},{"id":"43ee41bd-4bcc-447b-92af-31e9b8fc2c04","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"09a06a84-0b09-48ee-8db5-7ea906d63bc7","subtype":"Figure","type":"Plot"}},"id":"a864ba75-2713-4588-9f96-72da1190aae4","type":"Legend"},{"attributes":{"source":{"id":"91d8ab4b-f51f-42ad-8d4a-4e2d4415b69f","type":"ColumnDataSource"}},"id":"8c357d91-3c7c-44a5-951d-c6faa5be628c","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"af6243f5-67e4-4a9d-a9d5-c1b641871fe2","type":"GlyphRenderer"}]},"id":"d7a53942-b051-4c80-ba1f-67d8ebe45419","type":"LegendItem"},{"attributes":{"below":[{"id":"930bce41-e3c8-4461-a014-d041d330c9a9","type":"CategoricalAxis"}],"left":[{"id":"ce06deec-fa83-467d-a95d-ddaeadad7fca","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"930bce41-e3c8-4461-a014-d041d330c9a9","type":"CategoricalAxis"},{"id":"5389d6dd-2fed-4cf8-a62e-4a43ec77f4d6","type":"Grid"},{"id":"ce06deec-fa83-467d-a95d-ddaeadad7fca","type":"LinearAxis"},{"id":"f21d0dce-f14f-4cfc-8b00-503b2f90d780","type":"Grid"},{"id":"a864ba75-2713-4588-9f96-72da1190aae4","type":"Legend"},{"id":"e5aee1ea-39c2-4704-8793-739da3358da1","type":"GlyphRenderer"},{"id":"af6243f5-67e4-4a9d-a9d5-c1b641871fe2","type":"GlyphRenderer"},{"id":"e0dcb0b0-9f5a-4be1-bed5-bcbdcd4d4597","type":"GlyphRenderer"}],"title":{"id":"c69fdd78-027e-43ba-ad37-2cf5eb5b0cac","type":"Title"},"toolbar":{"id":"537de444-4b48-43f6-878c-d82ef726ee00","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2aee050f-9f17-47f4-96e3-4d7120567e81","type":"FactorRange"},"x_scale":{"id":"928307bd-7178-4c22-9ea2-8c3c62fb9554","type":"CategoricalScale"},"y_range":{"id":"381c7b49-7269-457d-83cd-dd0bd975a3ec","type":"Range1d"},"y_scale":{"id":"2478cc2d-2288-4a4e-a51e-311508082e54","type":"LinearScale"}},"id":"09a06a84-0b09-48ee-8db5-7ea906d63bc7","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"91d8ab4b-f51f-42ad-8d4a-4e2d4415b69f","type":"ColumnDataSource"}},"id":"a0422893-e11b-4841-b8f1-03b85af9f52d","type":"CDSView"},{"attributes":{},"id":"e71df326-8c2a-47a8-a5c1-7c4ffcd0b253","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"91d8ab4b-f51f-42ad-8d4a-4e2d4415b69f","type":"ColumnDataSource"},"glyph":{"id":"9efe05e0-6548-4dc2-a30f-7bf653ba1350","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1a252113-f49f-4616-9178-718a53e11849","type":"VBar"},"selection_glyph":null,"view":{"id":"a0422893-e11b-4841-b8f1-03b85af9f52d","type":"CDSView"}},"id":"e5aee1ea-39c2-4704-8793-739da3358da1","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"e0dcb0b0-9f5a-4be1-bed5-bcbdcd4d4597","type":"GlyphRenderer"}]},"id":"43ee41bd-4bcc-447b-92af-31e9b8fc2c04","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"8619f4ed-3ad0-4618-a3e2-527ad4a86241","type":"Dodge"}}},"id":"1a252113-f49f-4616-9178-718a53e11849","type":"VBar"},{"attributes":{"data_source":{"id":"91d8ab4b-f51f-42ad-8d4a-4e2d4415b69f","type":"ColumnDataSource"},"glyph":{"id":"32473103-466e-4ecf-b298-cb564f7c4936","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79f976f4-ff72-4e55-a9e0-9b62d261b567","type":"VBar"},"selection_glyph":null,"view":{"id":"8c357d91-3c7c-44a5-951d-c6faa5be628c","type":"CDSView"}},"id":"af6243f5-67e4-4a9d-a9d5-c1b641871fe2","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"09a06a84-0b09-48ee-8db5-7ea906d63bc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee859c38-118e-46f8-b19f-f58873b25e43","type":"CategoricalTicker"}},"id":"5389d6dd-2fed-4cf8-a62e-4a43ec77f4d6","type":"Grid"},{"attributes":{"range":{"id":"2aee050f-9f17-47f4-96e3-4d7120567e81","type":"FactorRange"},"value":0.25},"id":"e3cc729f-7f29-4915-b17d-128a933f7c69","type":"Dodge"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"e3cc729f-7f29-4915-b17d-128a933f7c69","type":"Dodge"}}},"id":"f2156b5a-d654-48c4-9aa0-766fbc491234","type":"VBar"},{"attributes":{},"id":"2478cc2d-2288-4a4e-a51e-311508082e54","type":"LinearScale"},{"attributes":{"range":{"id":"2aee050f-9f17-47f4-96e3-4d7120567e81","type":"FactorRange"},"value":-0.25},"id":"8619f4ed-3ad0-4618-a3e2-527ad4a86241","type":"Dodge"},{"attributes":{},"id":"ee859c38-118e-46f8-b19f-f58873b25e43","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"127b63d4-ff12-45cc-a039-eabab840b743","type":"CategoricalTickFormatter"},"plot":{"id":"09a06a84-0b09-48ee-8db5-7ea906d63bc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee859c38-118e-46f8-b19f-f58873b25e43","type":"CategoricalTicker"}},"id":"930bce41-e3c8-4461-a014-d041d330c9a9","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"09a06a84-0b09-48ee-8db5-7ea906d63bc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"8073742b-048d-4ffa-8ad0-be876786bd56","type":"BasicTicker"}},"id":"f21d0dce-f14f-4cfc-8b00-503b2f90d780","type":"Grid"},{"attributes":{"formatter":{"id":"e71df326-8c2a-47a8-a5c1-7c4ffcd0b253","type":"BasicTickFormatter"},"plot":{"id":"09a06a84-0b09-48ee-8db5-7ea906d63bc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"8073742b-048d-4ffa-8ad0-be876786bd56","type":"BasicTicker"}},"id":"ce06deec-fa83-467d-a95d-ddaeadad7fca","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"61fea0c4-d872-4384-99f4-b827b743a019","type":"Dodge"}}},"id":"32473103-466e-4ecf-b298-cb564f7c4936","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"e3cc729f-7f29-4915-b17d-128a933f7c69","type":"Dodge"}}},"id":"c576d22a-d723-48f7-bfa4-fc31d15d079a","type":"VBar"},{"attributes":{},"id":"127b63d4-ff12-45cc-a039-eabab840b743","type":"CategoricalTickFormatter"},{"attributes":{"range":{"id":"2aee050f-9f17-47f4-96e3-4d7120567e81","type":"FactorRange"}},"id":"61fea0c4-d872-4384-99f4-b827b743a019","type":"Dodge"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"c69fdd78-027e-43ba-ad37-2cf5eb5b0cac","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"61fea0c4-d872-4384-99f4-b827b743a019","type":"Dodge"}}},"id":"79f976f4-ff72-4e55-a9e0-9b62d261b567","type":"VBar"},{"attributes":{"callback":null,"end":10},"id":"381c7b49-7269-457d-83cd-dd0bd975a3ec","type":"Range1d"},{"attributes":{},"id":"8073742b-048d-4ffa-8ad0-be876786bd56","type":"BasicTicker"},{"attributes":{"source":{"id":"91d8ab4b-f51f-42ad-8d4a-4e2d4415b69f","type":"ColumnDataSource"}},"id":"18001cfd-ec34-44ce-892c-bdf1abc0e812","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"2aee050f-9f17-47f4-96e3-4d7120567e81","type":"FactorRange"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"e5aee1ea-39c2-4704-8793-739da3358da1","type":"GlyphRenderer"}]},"id":"81042dc8-cccd-4144-b97b-215b33d9d90e","type":"LegendItem"},{"attributes":{"data_source":{"id":"91d8ab4b-f51f-42ad-8d4a-4e2d4415b69f","type":"ColumnDataSource"},"glyph":{"id":"f2156b5a-d654-48c4-9aa0-766fbc491234","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c576d22a-d723-48f7-bfa4-fc31d15d079a","type":"VBar"},"selection_glyph":null,"view":{"id":"18001cfd-ec34-44ce-892c-bdf1abc0e812","type":"CDSView"}},"id":"e0dcb0b0-9f5a-4be1-bed5-bcbdcd4d4597","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"8619f4ed-3ad0-4618-a3e2-527ad4a86241","type":"Dodge"}}},"id":"9efe05e0-6548-4dc2-a30f-7bf653ba1350","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"537de444-4b48-43f6-878c-d82ef726ee00","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"91d8ab4b-f51f-42ad-8d4a-4e2d4415b69f","type":"ColumnDataSource"},{"attributes":{},"id":"928307bd-7178-4c22-9ea2-8c3c62fb9554","type":"CategoricalScale"}],"root_ids":["09a06a84-0b09-48ee-8db5-7ea906d63bc7"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"950c127d-e70a-48d0-86a8-f950454313ad","elementid":"2affb927-be60-4112-8c1f-cfb73dc76a8e","modelid":"09a06a84-0b09-48ee-8db5-7ea906d63bc7"}];
                
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
