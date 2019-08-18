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
      };var element = document.getElementById("50f442e3-da6e-4285-aef5-314d1dbbf42b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '50f442e3-da6e-4285-aef5-314d1dbbf42b' but no matching script tag was found. ")
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
                var docs_json = {"42a2501d-00ad-4584-baeb-8afac9ad9b10":{"roots":{"references":[{"attributes":{},"id":"cbae5712-c206-40ed-b5cf-f559ef228cd0","type":"BasicTickFormatter"},{"attributes":{},"id":"604790df-35e0-41e2-9e97-ef9223231e23","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb13a033-55d0-4484-b01a-271a435c2ab5","type":"Circle"},{"attributes":{"formatter":{"id":"cbae5712-c206-40ed-b5cf-f559ef228cd0","type":"BasicTickFormatter"},"plot":{"id":"a35ea71a-a4cf-46d8-bce5-c02b3c22b2a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9a2434b-6de7-4648-bcb0-4409b5916802","type":"BasicTicker"}},"id":"c3f6e766-bf94-4e22-b9aa-58f745f0794d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"07e58c3d-c848-4a75-8f27-e410d946a2bc","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"f3aeb7a2-06a4-42c8-86a8-73a875ff294c","type":"Title"},{"attributes":{"child":{"id":"2240d57d-1c25-42b7-8d20-fac48d431b3e","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"e1b63f41-2c72-48da-9f00-00f797d9f1c0","type":"Panel"},{"attributes":{"data_source":{"id":"281848ba-a81c-41ed-8c6a-d08109dac0a9","type":"ColumnDataSource"},"glyph":{"id":"9466e939-b8e4-49c5-ab7c-5b950b1898f5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d46ba87-8bfc-4f02-b34f-5993f4157ee3","type":"Line"},"selection_glyph":null,"view":{"id":"0bf28a86-4283-4adc-9d51-770b28b06b72","type":"CDSView"}},"id":"4134b699-9331-4f66-b758-24791eb71000","type":"GlyphRenderer"},{"attributes":{"source":{"id":"eba2c40e-7e4b-4c3d-9543-bb0781e18832","type":"ColumnDataSource"}},"id":"a61b5d26-ff25-4296-9d1a-1bbb290c1874","type":"CDSView"},{"attributes":{"source":{"id":"281848ba-a81c-41ed-8c6a-d08109dac0a9","type":"ColumnDataSource"}},"id":"0bf28a86-4283-4adc-9d51-770b28b06b72","type":"CDSView"},{"attributes":{},"id":"7a38abd4-cbe1-4549-9e4d-0f5483ff545c","type":"WheelZoomTool"},{"attributes":{},"id":"e5a52dcd-e71e-4111-8dc8-12368fd96e2e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"281848ba-a81c-41ed-8c6a-d08109dac0a9","type":"ColumnDataSource"},{"attributes":{},"id":"95bd9df3-6bc9-4fc7-9599-110bffdbcfe1","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15cfc1bf-1a28-4a5c-9072-e35289a36e78","type":"Circle"},{"attributes":{},"id":"d3449134-32e6-45aa-9a76-4dc50715b845","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d3449134-32e6-45aa-9a76-4dc50715b845","type":"BasicTickFormatter"},"plot":{"id":"2240d57d-1c25-42b7-8d20-fac48d431b3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bece7bf-a579-47c7-8075-c8fcbea9eb0f","type":"BasicTicker"}},"id":"6649d759-9b08-41d1-8447-7307a08327be","type":"LinearAxis"},{"attributes":{},"id":"cd9d7a17-01c0-47a4-be4d-c94d1e621bde","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8ffe622f-c477-4605-b879-421146bdd332","type":"BasicTickFormatter"},"plot":{"id":"2240d57d-1c25-42b7-8d20-fac48d431b3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd9d7a17-01c0-47a4-be4d-c94d1e621bde","type":"BasicTicker"}},"id":"66694a3f-896b-489e-a4fb-0edca6f0d03e","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"9466e939-b8e4-49c5-ab7c-5b950b1898f5","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d46ba87-8bfc-4f02-b34f-5993f4157ee3","type":"Line"},{"attributes":{"overlay":{"id":"ec341748-7611-44c6-af63-42347361791d","type":"BoxAnnotation"}},"id":"fd507121-44d9-42c0-85b2-27656ac4b7ef","type":"BoxZoomTool"},{"attributes":{},"id":"4b03ef2c-90ea-4f87-afb6-5403f83f36a8","type":"SaveTool"},{"attributes":{"callback":null},"id":"76b8d754-fd42-4ec0-97e9-e35b04f0a991","type":"DataRange1d"},{"attributes":{},"id":"6631570d-6dd9-4ae6-8b97-babb54803d6b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"95bd9df3-6bc9-4fc7-9599-110bffdbcfe1","type":"PanTool"},{"id":"7a38abd4-cbe1-4549-9e4d-0f5483ff545c","type":"WheelZoomTool"},{"id":"e5d75b50-27d1-41c7-b6d4-89b8c5905bd9","type":"BoxZoomTool"},{"id":"e1112272-7dfb-40db-b417-393fb58d23ef","type":"SaveTool"},{"id":"604790df-35e0-41e2-9e97-ef9223231e23","type":"ResetTool"},{"id":"3b37a5f1-9ab0-4348-905c-e2240976fe9d","type":"HelpTool"}]},"id":"dd4e308e-000c-4b2c-9e22-57d7f20fdb5d","type":"Toolbar"},{"attributes":{},"id":"c9a2434b-6de7-4648-bcb0-4409b5916802","type":"BasicTicker"},{"attributes":{"child":{"id":"a35ea71a-a4cf-46d8-bce5-c02b3c22b2a0","subtype":"Figure","type":"Plot"},"title":"line"},"id":"e6615c30-5bdc-49db-a7a3-ab395a28268b","type":"Panel"},{"attributes":{"plot":{"id":"2240d57d-1c25-42b7-8d20-fac48d431b3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bece7bf-a579-47c7-8075-c8fcbea9eb0f","type":"BasicTicker"}},"id":"8d12c190-8ece-4570-b2a8-fee616b3e82a","type":"Grid"},{"attributes":{"callback":null},"id":"4649bc3d-edbc-4291-af28-1d5e0255e0e4","type":"DataRange1d"},{"attributes":{},"id":"6d777652-80e9-4f37-bd9d-5e0740b4c119","type":"LinearScale"},{"attributes":{},"id":"7dcdcaab-4668-42ca-99f6-fe737be6e5ce","type":"LinearScale"},{"attributes":{"data_source":{"id":"eba2c40e-7e4b-4c3d-9543-bb0781e18832","type":"ColumnDataSource"},"glyph":{"id":"fb13a033-55d0-4484-b01a-271a435c2ab5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15cfc1bf-1a28-4a5c-9072-e35289a36e78","type":"Circle"},"selection_glyph":null,"view":{"id":"a61b5d26-ff25-4296-9d1a-1bbb290c1874","type":"CDSView"}},"id":"008656ea-ed16-4858-832f-778a5f312bb7","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"330d4503-0269-415b-97ea-7bcc82d4389f","type":"LinearAxis"}],"left":[{"id":"c3f6e766-bf94-4e22-b9aa-58f745f0794d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"330d4503-0269-415b-97ea-7bcc82d4389f","type":"LinearAxis"},{"id":"9150ffc6-82d3-49c7-ad09-6b4604af7d66","type":"Grid"},{"id":"c3f6e766-bf94-4e22-b9aa-58f745f0794d","type":"LinearAxis"},{"id":"1a9855cb-fde3-40b6-bafa-c613f809762c","type":"Grid"},{"id":"ec341748-7611-44c6-af63-42347361791d","type":"BoxAnnotation"},{"id":"4134b699-9331-4f66-b758-24791eb71000","type":"GlyphRenderer"}],"title":{"id":"f3aeb7a2-06a4-42c8-86a8-73a875ff294c","type":"Title"},"toolbar":{"id":"143a0f2b-cecf-4364-89ef-c1b36cf48db1","type":"Toolbar"},"x_range":{"id":"4649bc3d-edbc-4291-af28-1d5e0255e0e4","type":"DataRange1d"},"x_scale":{"id":"7dcdcaab-4668-42ca-99f6-fe737be6e5ce","type":"LinearScale"},"y_range":{"id":"07e58c3d-c848-4a75-8f27-e410d946a2bc","type":"DataRange1d"},"y_scale":{"id":"71c2110d-0cf9-4317-8be8-2f599a896ae5","type":"LinearScale"}},"id":"a35ea71a-a4cf-46d8-bce5-c02b3c22b2a0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71711bb9-62fb-4cb8-a6fe-90833c9a8494","type":"BasicTicker"},{"attributes":{},"id":"e1112272-7dfb-40db-b417-393fb58d23ef","type":"SaveTool"},{"attributes":{},"id":"65eefae1-2238-44bb-9f44-dc1bddd97237","type":"HelpTool"},{"attributes":{"callback":null},"id":"df82de5f-e088-409d-8f12-0c752a00bf9a","type":"DataRange1d"},{"attributes":{},"id":"3b37a5f1-9ab0-4348-905c-e2240976fe9d","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3a2e68e5-3923-45cb-bd21-8ad8bd52c239","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"2240d57d-1c25-42b7-8d20-fac48d431b3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd9d7a17-01c0-47a4-be4d-c94d1e621bde","type":"BasicTicker"}},"id":"3e015ca0-194a-4263-885d-3b87dbba093d","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"a35ea71a-a4cf-46d8-bce5-c02b3c22b2a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9a2434b-6de7-4648-bcb0-4409b5916802","type":"BasicTicker"}},"id":"1a9855cb-fde3-40b6-bafa-c613f809762c","type":"Grid"},{"attributes":{"callback":null,"tabs":[{"id":"e1b63f41-2c72-48da-9f00-00f797d9f1c0","type":"Panel"},{"id":"e6615c30-5bdc-49db-a7a3-ab395a28268b","type":"Panel"}]},"id":"f0a820be-fd25-49b9-b633-1ce87733f5fc","type":"Tabs"},{"attributes":{"plot":null,"text":""},"id":"b9c08661-6478-46b1-8138-b54d398d9d55","type":"Title"},{"attributes":{"plot":{"id":"a35ea71a-a4cf-46d8-bce5-c02b3c22b2a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"71711bb9-62fb-4cb8-a6fe-90833c9a8494","type":"BasicTicker"}},"id":"9150ffc6-82d3-49c7-ad09-6b4604af7d66","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec341748-7611-44c6-af63-42347361791d","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6631570d-6dd9-4ae6-8b97-babb54803d6b","type":"PanTool"},{"id":"02054fc8-c92f-4ba7-8ad1-cda2e0b7691d","type":"WheelZoomTool"},{"id":"fd507121-44d9-42c0-85b2-27656ac4b7ef","type":"BoxZoomTool"},{"id":"4b03ef2c-90ea-4f87-afb6-5403f83f36a8","type":"SaveTool"},{"id":"5ee583c7-4b63-4585-b9bf-c5c2a54ae68c","type":"ResetTool"},{"id":"65eefae1-2238-44bb-9f44-dc1bddd97237","type":"HelpTool"}]},"id":"143a0f2b-cecf-4364-89ef-c1b36cf48db1","type":"Toolbar"},{"attributes":{},"id":"9bece7bf-a579-47c7-8075-c8fcbea9eb0f","type":"BasicTicker"},{"attributes":{},"id":"8ffe622f-c477-4605-b879-421146bdd332","type":"BasicTickFormatter"},{"attributes":{},"id":"5ee583c7-4b63-4585-b9bf-c5c2a54ae68c","type":"ResetTool"},{"attributes":{},"id":"083f412e-abf3-438a-8587-3fc9740a52a8","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"eba2c40e-7e4b-4c3d-9543-bb0781e18832","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"3a2e68e5-3923-45cb-bd21-8ad8bd52c239","type":"BoxAnnotation"}},"id":"e5d75b50-27d1-41c7-b6d4-89b8c5905bd9","type":"BoxZoomTool"},{"attributes":{},"id":"02054fc8-c92f-4ba7-8ad1-cda2e0b7691d","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"e5a52dcd-e71e-4111-8dc8-12368fd96e2e","type":"BasicTickFormatter"},"plot":{"id":"a35ea71a-a4cf-46d8-bce5-c02b3c22b2a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"71711bb9-62fb-4cb8-a6fe-90833c9a8494","type":"BasicTicker"}},"id":"330d4503-0269-415b-97ea-7bcc82d4389f","type":"LinearAxis"},{"attributes":{},"id":"71c2110d-0cf9-4317-8be8-2f599a896ae5","type":"LinearScale"},{"attributes":{"below":[{"id":"6649d759-9b08-41d1-8447-7307a08327be","type":"LinearAxis"}],"left":[{"id":"66694a3f-896b-489e-a4fb-0edca6f0d03e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6649d759-9b08-41d1-8447-7307a08327be","type":"LinearAxis"},{"id":"8d12c190-8ece-4570-b2a8-fee616b3e82a","type":"Grid"},{"id":"66694a3f-896b-489e-a4fb-0edca6f0d03e","type":"LinearAxis"},{"id":"3e015ca0-194a-4263-885d-3b87dbba093d","type":"Grid"},{"id":"3a2e68e5-3923-45cb-bd21-8ad8bd52c239","type":"BoxAnnotation"},{"id":"008656ea-ed16-4858-832f-778a5f312bb7","type":"GlyphRenderer"}],"title":{"id":"b9c08661-6478-46b1-8138-b54d398d9d55","type":"Title"},"toolbar":{"id":"dd4e308e-000c-4b2c-9e22-57d7f20fdb5d","type":"Toolbar"},"x_range":{"id":"76b8d754-fd42-4ec0-97e9-e35b04f0a991","type":"DataRange1d"},"x_scale":{"id":"6d777652-80e9-4f37-bd9d-5e0740b4c119","type":"LinearScale"},"y_range":{"id":"df82de5f-e088-409d-8f12-0c752a00bf9a","type":"DataRange1d"},"y_scale":{"id":"083f412e-abf3-438a-8587-3fc9740a52a8","type":"LinearScale"}},"id":"2240d57d-1c25-42b7-8d20-fac48d431b3e","subtype":"Figure","type":"Plot"}],"root_ids":["f0a820be-fd25-49b9-b633-1ce87733f5fc"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"42a2501d-00ad-4584-baeb-8afac9ad9b10","elementid":"50f442e3-da6e-4285-aef5-314d1dbbf42b","modelid":"f0a820be-fd25-49b9-b633-1ce87733f5fc"}];
                
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
