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
      };var element = document.getElementById("104890d3-fa97-4044-8d55-126c2b449a92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '104890d3-fa97-4044-8d55-126c2b449a92' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"d3c97b6b-d045-4de5-b13c-13ffb1266820":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7cc2e934-94a1-4ae2-b5b5-c8604ee2217f","type":"Square"},{"attributes":{},"id":"2ca92d77-ff8b-4619-8519-ed2f4da331fa","type":"PanTool"},{"attributes":{"callback":null},"id":"98b590bf-4920-47fc-a8ad-fd09f57108af","type":"DataRange1d"},{"attributes":{"callback":null},"id":"3946c03d-c536-49ea-a73d-c205a1e0a6c6","type":"DataRange1d"},{"attributes":{},"id":"f6879bb3-12e1-4fbe-9b1f-3f24513801dc","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"a2a883c8-2359-4a09-9a93-68a1677cab18","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b6985103-b5c6-4434-8428-0262eee0a72d","type":"ColumnDataSource"}},"id":"5a50f893-e253-4dfc-91e9-bb170728a6c8","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2ca92d77-ff8b-4619-8519-ed2f4da331fa","type":"PanTool"},{"id":"8aeb6fa4-ee05-4d63-bdd7-b7ae8955a78e","type":"WheelZoomTool"},{"id":"bf5ae213-44bf-4e14-8fe2-43d5efa88a15","type":"BoxZoomTool"},{"id":"910222fe-283c-4b2f-9e9e-d0af0d4a10b6","type":"SaveTool"},{"id":"09a08fbe-862f-4528-9e4f-5cd5ffe1f8b9","type":"ResetTool"},{"id":"74e483e6-8b82-4ad3-ae78-be0ee07f7d25","type":"HelpTool"}]},"id":"38787817-7d2c-43e3-b544-ac4ef541bee0","type":"Toolbar"},{"attributes":{},"id":"edd76d50-b600-4f4e-87f8-33f8e1533a36","type":"BasicTicker"},{"attributes":{"plot":{"id":"2b561a26-7917-4872-9edb-87c529bd4b15","subtype":"Figure","type":"Plot"},"ticker":{"id":"edd76d50-b600-4f4e-87f8-33f8e1533a36","type":"BasicTicker"}},"id":"8c14e85c-9f3c-4555-b335-ea3887009741","type":"Grid"},{"attributes":{"plot":{"id":"210bd645-40b1-49b8-8790-3bf1c51cefb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e2d5a1d-a89c-495b-b9cb-de3edf1ff1d0","type":"BasicTicker"}},"id":"1ad6291c-b18d-49b2-9e53-dcc51ce89760","type":"Grid"},{"attributes":{"children":[{"id":"c84eebcc-f057-4bf8-abf9-afbbd1d10401","type":"Spacer"},{"id":"210bd645-40b1-49b8-8790-3bf1c51cefb2","subtype":"Figure","type":"Plot"}]},"id":"a3b28e4d-3fad-4f84-a5bc-e09d023c19b0","type":"Row"},{"attributes":{},"id":"109039fe-2224-4c6f-8b84-8ad42cbe0916","type":"BasicTicker"},{"attributes":{},"id":"e7090e69-c1ad-41fa-b0da-f44e800be15b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"997696bc-eca9-4381-8d63-5511e4498166","type":"BasicTickFormatter"},"plot":{"id":"aa192260-71b4-4556-8737-c5e55f88d645","subtype":"Figure","type":"Plot"},"ticker":{"id":"109039fe-2224-4c6f-8b84-8ad42cbe0916","type":"BasicTicker"}},"id":"110d3895-9e73-41c7-8cd0-0e5b4b462b54","type":"LinearAxis"},{"attributes":{},"id":"99edf11f-b9cf-4874-9c6e-7d8404161cda","type":"LinearScale"},{"attributes":{"data_source":{"id":"09dc2b87-cf89-4523-a383-e5a666aaf34c","type":"ColumnDataSource"},"glyph":{"id":"7cc2e934-94a1-4ae2-b5b5-c8604ee2217f","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67e3ae7e-0f6b-4e49-952a-54b1c85716c8","type":"Square"},"selection_glyph":null,"view":{"id":"c8d1435f-924d-413b-a67b-8df96b5ca79e","type":"CDSView"}},"id":"cdb7f1a8-ac0f-4914-a4f4-6a5ecff5cac2","type":"GlyphRenderer"},{"attributes":{},"id":"001a7ead-2dbf-4269-bd35-ca23a23383c9","type":"PanTool"},{"attributes":{},"id":"06ec9964-2e12-46de-9b32-0c25b2ee80ca","type":"LinearScale"},{"attributes":{},"id":"8aeb6fa4-ee05-4d63-bdd7-b7ae8955a78e","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"2b561a26-7917-4872-9edb-87c529bd4b15","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7090e69-c1ad-41fa-b0da-f44e800be15b","type":"BasicTicker"}},"id":"fbca10f4-9181-47ad-b514-1afb9de5f871","type":"Grid"},{"attributes":{},"id":"2e073444-0622-43ad-9776-eab2cc5759f9","type":"SaveTool"},{"attributes":{"below":[{"id":"ba38cbc0-195d-4759-b9ce-1ceb7d90e472","type":"LinearAxis"}],"left":[{"id":"76c98d3b-c594-45a2-86ef-42e368a281b1","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"ba38cbc0-195d-4759-b9ce-1ceb7d90e472","type":"LinearAxis"},{"id":"1ad6291c-b18d-49b2-9e53-dcc51ce89760","type":"Grid"},{"id":"76c98d3b-c594-45a2-86ef-42e368a281b1","type":"LinearAxis"},{"id":"0786a731-7925-468c-a86e-2144311aa763","type":"Grid"},{"id":"9171971c-3072-4cf6-9318-1a460b69419f","type":"BoxAnnotation"},{"id":"cdb7f1a8-ac0f-4914-a4f4-6a5ecff5cac2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"38787817-7d2c-43e3-b544-ac4ef541bee0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5295c0f1-9a36-4375-b96f-35825484ebd3","type":"DataRange1d"},"x_scale":{"id":"d241563f-1192-42d1-bf1d-b87895b971f0","type":"LinearScale"},"y_range":{"id":"c36dbe68-f11e-43df-841c-5d9615916b61","type":"DataRange1d"},"y_scale":{"id":"f6879bb3-12e1-4fbe-9b1f-3f24513801dc","type":"LinearScale"}},"id":"210bd645-40b1-49b8-8790-3bf1c51cefb2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1d591970-b9c3-4f17-a9e3-fe3081fb4351","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5b95aa3c-adea-473d-8f7d-3ac1540fcc2c","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"2b561a26-7917-4872-9edb-87c529bd4b15","subtype":"Figure","type":"Plot"},{"id":"aa192260-71b4-4556-8737-c5e55f88d645","subtype":"Figure","type":"Plot"}]},"id":"a2def015-6b1a-4576-bc26-5e83d5851138","type":"Row"},{"attributes":{},"id":"090c82c1-8b32-409e-8035-c6b207d517f4","type":"HelpTool"},{"attributes":{"below":[{"id":"6a6b64a0-8aee-43e8-add1-98cdee9ec83d","type":"LinearAxis"}],"left":[{"id":"bf794da1-0b69-4b03-9c89-3db2a0846be8","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"6a6b64a0-8aee-43e8-add1-98cdee9ec83d","type":"LinearAxis"},{"id":"8c14e85c-9f3c-4555-b335-ea3887009741","type":"Grid"},{"id":"bf794da1-0b69-4b03-9c89-3db2a0846be8","type":"LinearAxis"},{"id":"fbca10f4-9181-47ad-b514-1afb9de5f871","type":"Grid"},{"id":"75d16bdd-aaf3-4e68-a9d6-cdcfc9396878","type":"BoxAnnotation"},{"id":"18900958-803a-46ca-884b-8b48d461cdd3","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9c5bcff5-1d3f-4af2-bb49-37354b1e1a1c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4cfb972c-1413-480d-82ec-3263383b031e","type":"DataRange1d"},"x_scale":{"id":"06ec9964-2e12-46de-9b32-0c25b2ee80ca","type":"LinearScale"},"y_range":{"id":"98b590bf-4920-47fc-a8ad-fd09f57108af","type":"DataRange1d"},"y_scale":{"id":"99edf11f-b9cf-4874-9c6e-7d8404161cda","type":"LinearScale"}},"id":"2b561a26-7917-4872-9edb-87c529bd4b15","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"a2def015-6b1a-4576-bc26-5e83d5851138","type":"Row"},{"id":"a3b28e4d-3fad-4f84-a5bc-e09d023c19b0","type":"Row"}]},"id":"180b59d5-ca64-4ec4-8685-2ba4c9f8d008","type":"Column"},{"attributes":{"overlay":{"id":"5b95aa3c-adea-473d-8f7d-3ac1540fcc2c","type":"BoxAnnotation"}},"id":"399ac255-9b23-41d1-8085-d811be07bbe8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"aa192260-71b4-4556-8737-c5e55f88d645","subtype":"Figure","type":"Plot"},"ticker":{"id":"7096b493-73cc-4f60-ac9e-c145a90b299f","type":"BasicTicker"}},"id":"2a4d6411-6755-4f64-afa1-74c298ca906f","type":"Grid"},{"attributes":{},"id":"3629f295-d85a-4d13-9267-9009afff49dc","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"210bd645-40b1-49b8-8790-3bf1c51cefb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"b876f7a5-23a9-4ab2-97f2-eea125c2a1a3","type":"BasicTicker"}},"id":"0786a731-7925-468c-a86e-2144311aa763","type":"Grid"},{"attributes":{},"id":"c02d322c-b865-437e-ae31-466e10aab1a5","type":"HelpTool"},{"attributes":{},"id":"74e483e6-8b82-4ad3-ae78-be0ee07f7d25","type":"HelpTool"},{"attributes":{},"id":"1e911bcc-50b4-45b5-a4b5-b82865798e13","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0498150d-3494-48d6-b199-d6f30145f205","type":"Triangle"},{"attributes":{"children":[{"id":"cad47a1f-067a-4c22-a3c3-938527e456e2","type":"ToolbarBox"},{"id":"180b59d5-ca64-4ec4-8685-2ba4c9f8d008","type":"Column"}]},"id":"a50e7b80-4dcf-449c-85b0-38a2b41b6b09","type":"Column"},{"attributes":{},"id":"a8bad534-a91a-479c-8c52-ad1019669410","type":"WheelZoomTool"},{"attributes":{},"id":"997696bc-eca9-4381-8d63-5511e4498166","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0996a60d-930b-47b4-86a5-17a4e8ddf66d","type":"BasicTickFormatter"},"plot":{"id":"aa192260-71b4-4556-8737-c5e55f88d645","subtype":"Figure","type":"Plot"},"ticker":{"id":"7096b493-73cc-4f60-ac9e-c145a90b299f","type":"BasicTicker"}},"id":"b07b61ea-b4cc-42f1-9f4b-1029e773f5fc","type":"LinearAxis"},{"attributes":{"below":[{"id":"b07b61ea-b4cc-42f1-9f4b-1029e773f5fc","type":"LinearAxis"}],"left":[{"id":"110d3895-9e73-41c7-8cd0-0e5b4b462b54","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b07b61ea-b4cc-42f1-9f4b-1029e773f5fc","type":"LinearAxis"},{"id":"2a4d6411-6755-4f64-afa1-74c298ca906f","type":"Grid"},{"id":"110d3895-9e73-41c7-8cd0-0e5b4b462b54","type":"LinearAxis"},{"id":"20af9d45-2ebc-436b-8bb5-293428d63178","type":"Grid"},{"id":"5b95aa3c-adea-473d-8f7d-3ac1540fcc2c","type":"BoxAnnotation"},{"id":"09b97ecc-1b95-4584-9a26-5f53c19ded03","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8a72eecf-d338-4210-9960-0beca44f971d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3946c03d-c536-49ea-a73d-c205a1e0a6c6","type":"DataRange1d"},"x_scale":{"id":"22953c0e-88bb-4aa1-822b-18b39e39b446","type":"LinearScale"},"y_range":{"id":"07ea0f22-4bec-443f-a594-c5e65acd25ac","type":"DataRange1d"},"y_scale":{"id":"1e911bcc-50b4-45b5-a4b5-b82865798e13","type":"LinearScale"}},"id":"aa192260-71b4-4556-8737-c5e55f88d645","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"09dc2b87-cf89-4523-a383-e5a666aaf34c","type":"ColumnDataSource"}},"id":"c8d1435f-924d-413b-a67b-8df96b5ca79e","type":"CDSView"},{"attributes":{},"id":"99cbcf30-3a73-4206-ab5e-4bb27af98bfc","type":"ResetTool"},{"attributes":{},"id":"e5af2e94-e900-409f-99c0-2c35b336cd34","type":"BasicTickFormatter"},{"attributes":{},"id":"58c3bc6b-a864-4958-b0c4-2df8c73e57bf","type":"BasicTickFormatter"},{"attributes":{},"id":"910222fe-283c-4b2f-9e9e-d0af0d4a10b6","type":"SaveTool"},{"attributes":{"formatter":{"id":"e04b57ee-6b79-42fd-a202-ef2b2642ed5b","type":"BasicTickFormatter"},"plot":{"id":"210bd645-40b1-49b8-8790-3bf1c51cefb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e2d5a1d-a89c-495b-b9cb-de3edf1ff1d0","type":"BasicTicker"}},"id":"ba38cbc0-195d-4759-b9ce-1ceb7d90e472","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdc8b456-8b4d-435b-9fa1-6d64eb18e918","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"b6985103-b5c6-4434-8428-0262eee0a72d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c36dbe68-f11e-43df-841c-5d9615916b61","type":"DataRange1d"},{"attributes":{"source":{"id":"a2a883c8-2359-4a09-9a93-68a1677cab18","type":"ColumnDataSource"}},"id":"be6128e4-fd33-48ee-983a-b4eb90f3caf0","type":"CDSView"},{"attributes":{"data_source":{"id":"a2a883c8-2359-4a09-9a93-68a1677cab18","type":"ColumnDataSource"},"glyph":{"id":"0498150d-3494-48d6-b199-d6f30145f205","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44f8d55f-81a1-4085-a443-b97e6f4fef29","type":"Triangle"},"selection_glyph":null,"view":{"id":"be6128e4-fd33-48ee-983a-b4eb90f3caf0","type":"CDSView"}},"id":"09b97ecc-1b95-4584-9a26-5f53c19ded03","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b6985103-b5c6-4434-8428-0262eee0a72d","type":"ColumnDataSource"},"glyph":{"id":"fdc8b456-8b4d-435b-9fa1-6d64eb18e918","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5025f05a-2da8-4a33-a707-7774c3c195b2","type":"Circle"},"selection_glyph":null,"view":{"id":"5a50f893-e253-4dfc-91e9-bb170728a6c8","type":"CDSView"}},"id":"18900958-803a-46ca-884b-8b48d461cdd3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"67e3ae7e-0f6b-4e49-952a-54b1c85716c8","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"aa192260-71b4-4556-8737-c5e55f88d645","subtype":"Figure","type":"Plot"},"ticker":{"id":"109039fe-2224-4c6f-8b84-8ad42cbe0916","type":"BasicTicker"}},"id":"20af9d45-2ebc-436b-8bb5-293428d63178","type":"Grid"},{"attributes":{},"id":"b25bd6ec-7221-41bc-8ff0-14504844b55a","type":"ResetTool"},{"attributes":{},"id":"125a5ba7-07b0-44f3-899a-1a9dfd4eb26f","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"1d591970-b9c3-4f17-a9e3-fe3081fb4351","type":"BasicTickFormatter"},"plot":{"id":"2b561a26-7917-4872-9edb-87c529bd4b15","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7090e69-c1ad-41fa-b0da-f44e800be15b","type":"BasicTicker"}},"id":"bf794da1-0b69-4b03-9c89-3db2a0846be8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"07ea0f22-4bec-443f-a594-c5e65acd25ac","type":"DataRange1d"},{"attributes":{},"id":"d241563f-1192-42d1-bf1d-b87895b971f0","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"75d16bdd-aaf3-4e68-a9d6-cdcfc9396878","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"e5af2e94-e900-409f-99c0-2c35b336cd34","type":"BasicTickFormatter"},"plot":{"id":"2b561a26-7917-4872-9edb-87c529bd4b15","subtype":"Figure","type":"Plot"},"ticker":{"id":"edd76d50-b600-4f4e-87f8-33f8e1533a36","type":"BasicTicker"}},"id":"6a6b64a0-8aee-43e8-add1-98cdee9ec83d","type":"LinearAxis"},{"attributes":{"overlay":{"id":"75d16bdd-aaf3-4e68-a9d6-cdcfc9396878","type":"BoxAnnotation"}},"id":"30271ce3-7a18-4560-8dbc-cd08c0763db5","type":"BoxZoomTool"},{"attributes":{"height":250,"width":250},"id":"c84eebcc-f057-4bf8-abf9-afbbd1d10401","type":"Spacer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3653a6c3-8622-4069-828e-f4905138c17e","type":"PanTool"},{"id":"a8bad534-a91a-479c-8c52-ad1019669410","type":"WheelZoomTool"},{"id":"399ac255-9b23-41d1-8085-d811be07bbe8","type":"BoxZoomTool"},{"id":"2e073444-0622-43ad-9776-eab2cc5759f9","type":"SaveTool"},{"id":"99cbcf30-3a73-4206-ab5e-4bb27af98bfc","type":"ResetTool"},{"id":"090c82c1-8b32-409e-8035-c6b207d517f4","type":"HelpTool"}]},"id":"8a72eecf-d338-4210-9960-0beca44f971d","type":"Toolbar"},{"attributes":{},"id":"22953c0e-88bb-4aa1-822b-18b39e39b446","type":"LinearScale"},{"attributes":{"formatter":{"id":"58c3bc6b-a864-4958-b0c4-2df8c73e57bf","type":"BasicTickFormatter"},"plot":{"id":"210bd645-40b1-49b8-8790-3bf1c51cefb2","subtype":"Figure","type":"Plot"},"ticker":{"id":"b876f7a5-23a9-4ab2-97f2-eea125c2a1a3","type":"BasicTicker"}},"id":"76c98d3b-c594-45a2-86ef-42e368a281b1","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"001a7ead-2dbf-4269-bd35-ca23a23383c9","type":"PanTool"},{"id":"125a5ba7-07b0-44f3-899a-1a9dfd4eb26f","type":"WheelZoomTool"},{"id":"30271ce3-7a18-4560-8dbc-cd08c0763db5","type":"BoxZoomTool"},{"id":"3629f295-d85a-4d13-9267-9009afff49dc","type":"SaveTool"},{"id":"b25bd6ec-7221-41bc-8ff0-14504844b55a","type":"ResetTool"},{"id":"c02d322c-b865-437e-ae31-466e10aab1a5","type":"HelpTool"}]},"id":"9c5bcff5-1d3f-4af2-bb49-37354b1e1a1c","type":"Toolbar"},{"attributes":{},"id":"1e2d5a1d-a89c-495b-b9cb-de3edf1ff1d0","type":"BasicTicker"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"001a7ead-2dbf-4269-bd35-ca23a23383c9","type":"PanTool"},{"id":"125a5ba7-07b0-44f3-899a-1a9dfd4eb26f","type":"WheelZoomTool"},{"id":"30271ce3-7a18-4560-8dbc-cd08c0763db5","type":"BoxZoomTool"},{"id":"3629f295-d85a-4d13-9267-9009afff49dc","type":"SaveTool"},{"id":"b25bd6ec-7221-41bc-8ff0-14504844b55a","type":"ResetTool"},{"id":"c02d322c-b865-437e-ae31-466e10aab1a5","type":"HelpTool"},{"id":"3653a6c3-8622-4069-828e-f4905138c17e","type":"PanTool"},{"id":"a8bad534-a91a-479c-8c52-ad1019669410","type":"WheelZoomTool"},{"id":"399ac255-9b23-41d1-8085-d811be07bbe8","type":"BoxZoomTool"},{"id":"2e073444-0622-43ad-9776-eab2cc5759f9","type":"SaveTool"},{"id":"99cbcf30-3a73-4206-ab5e-4bb27af98bfc","type":"ResetTool"},{"id":"090c82c1-8b32-409e-8035-c6b207d517f4","type":"HelpTool"},{"id":"2ca92d77-ff8b-4619-8519-ed2f4da331fa","type":"PanTool"},{"id":"8aeb6fa4-ee05-4d63-bdd7-b7ae8955a78e","type":"WheelZoomTool"},{"id":"bf5ae213-44bf-4e14-8fe2-43d5efa88a15","type":"BoxZoomTool"},{"id":"910222fe-283c-4b2f-9e9e-d0af0d4a10b6","type":"SaveTool"},{"id":"09a08fbe-862f-4528-9e4f-5cd5ffe1f8b9","type":"ResetTool"},{"id":"74e483e6-8b82-4ad3-ae78-be0ee07f7d25","type":"HelpTool"}]},"id":"cad47a1f-067a-4c22-a3c3-938527e456e2","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"4cfb972c-1413-480d-82ec-3263383b031e","type":"DataRange1d"},{"attributes":{},"id":"09a08fbe-862f-4528-9e4f-5cd5ffe1f8b9","type":"ResetTool"},{"attributes":{},"id":"0996a60d-930b-47b4-86a5-17a4e8ddf66d","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9171971c-3072-4cf6-9318-1a460b69419f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"5295c0f1-9a36-4375-b96f-35825484ebd3","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5025f05a-2da8-4a33-a707-7774c3c195b2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"44f8d55f-81a1-4085-a443-b97e6f4fef29","type":"Triangle"},{"attributes":{},"id":"3653a6c3-8622-4069-828e-f4905138c17e","type":"PanTool"},{"attributes":{},"id":"7096b493-73cc-4f60-ac9e-c145a90b299f","type":"BasicTicker"},{"attributes":{},"id":"b876f7a5-23a9-4ab2-97f2-eea125c2a1a3","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9171971c-3072-4cf6-9318-1a460b69419f","type":"BoxAnnotation"}},"id":"bf5ae213-44bf-4e14-8fe2-43d5efa88a15","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"09dc2b87-cf89-4523-a383-e5a666aaf34c","type":"ColumnDataSource"},{"attributes":{},"id":"e04b57ee-6b79-42fd-a202-ef2b2642ed5b","type":"BasicTickFormatter"}],"root_ids":["a50e7b80-4dcf-449c-85b0-38a2b41b6b09"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d3c97b6b-d045-4de5-b13c-13ffb1266820","elementid":"104890d3-fa97-4044-8d55-126c2b449a92","modelid":"a50e7b80-4dcf-449c-85b0-38a2b41b6b09"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
